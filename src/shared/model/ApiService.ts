import { GraphQLClient } from 'graphql-request';

import { container } from '../lib/DIContainer';
import { EnvironmentService } from './EnvironmentService';
import { getSdk, type Sdk } from '../../__generated__/graphql-request';

// Thin wrapper around the codegen'd graphql-request SDK.
//
// We keep this layer so:
//   - the container can hand out a single GraphQLClient
//   - request hooks (auth, tracing) live in one place
//   - tests can substitute a fake Sdk without touching call sites
//
// SSR resilience: a custom fetch enforces a per-request timeout so a slow
// or unreachable upstream cannot hang the Node SSR render. The timeout
// composes with any caller-supplied AbortSignal (e.g. ObservableRequest's
// per-fetch controller) via AbortSignal.any.
export class ApiService {
  public readonly sdk: Sdk;
  private static readonly REQUEST_TIMEOUT_MS = 10_000;

  constructor(env: EnvironmentService) {
    const client = new GraphQLClient(env.graphqlServerUrl, {
      headers: { 'Content-Type': 'application/json' },
      fetch: async (input, init) => {
        const timeoutSignal = AbortSignal.timeout(ApiService.REQUEST_TIMEOUT_MS);
        const signal = init?.signal
          ? AbortSignal.any([init.signal, timeoutSignal])
          : timeoutSignal;
        return fetch(input, { ...init, signal });
      },
    });
    this.sdk = getSdk(client);
  }
}

container.register(
  ApiService,
  () => new ApiService(container.get(EnvironmentService)),
  { scope: 'singleton' },
);
