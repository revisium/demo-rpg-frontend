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
export class ApiService {
  public readonly sdk: Sdk;

  constructor(env: EnvironmentService) {
    const client = new GraphQLClient(env.graphqlServerUrl, {
      headers: { 'Content-Type': 'application/json' },
    });
    this.sdk = getSdk(client);
  }
}

container.register(
  ApiService,
  () => new ApiService(container.get(EnvironmentService)),
  { scope: 'singleton' },
);
