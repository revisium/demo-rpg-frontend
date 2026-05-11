import { container } from '../lib/DIContainer';

// Reads REACT_APP_* env at module init.
//
// On the server we read from process.env (Node).
// On the client Vite inlines `import.meta.env.REACT_APP_*` at build time.
// This service hides that branch so the rest of the app sees a single
// strongly-typed surface.
export class EnvironmentService {
  public readonly graphqlServerUrl: string;
  public readonly packageVersion: string;
  public readonly gitCommitHash: string;
  public readonly gitBranchName: string;

  constructor() {
    const fromServer = (key: string): string | undefined =>
      typeof process !== 'undefined' ? process.env[key] : undefined;
    const fromClient = (key: string): string | undefined => {
      const env = import.meta.env as unknown as Record<string, string | undefined>;
      return env[key];
    };
    const read = (key: string): string => fromClient(key) ?? fromServer(key) ?? '';

    this.graphqlServerUrl = read('REACT_APP_GRAPHQL_SERVER_URL');
    this.packageVersion = read('PACKAGE_VERSION');
    this.gitCommitHash = read('GIT_COMMIT_HASH');
    this.gitBranchName = read('GIT_BRANCH_NAME');

    if (!this.graphqlServerUrl) {
      throw new Error('EnvironmentService: REACT_APP_GRAPHQL_SERVER_URL is required');
    }
  }
}

container.register(EnvironmentService, () => new EnvironmentService(), { scope: 'singleton' });
