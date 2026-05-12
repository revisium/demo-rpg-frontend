import { container } from '../lib/DIContainer';
import { isClient } from '../lib/helpers/isClient';

// Reads REACT_APP_* env once at construction.
//
// Lookup order matters because `import.meta.env.*` is inlined into BOTH
// bundles at build time, while `process.env.*` is only meaningful on the
// server at runtime. To allow operators to reconfigure the deployed image
// without a rebuild we:
//   - on the server: read `process.env` first, fall back to `import.meta.env`
//   - on the client: read `import.meta.env` (no `process` is defined)
export class EnvironmentService {
  public readonly graphqlServerUrl: string;
  public readonly packageVersion: string;
  public readonly gitCommitHash: string;
  public readonly gitBranchName: string;

  constructor() {
    const fromBuildTime = (key: string): string | undefined => {
      const env = import.meta.env as unknown as Record<string, string | undefined>;
      return env[key];
    };
    const fromRuntime = (key: string): string | undefined =>
      typeof process !== 'undefined' ? process.env[key] : undefined;

    const read = isClient()
      ? (key: string): string => fromBuildTime(key) ?? ''
      : (key: string): string => fromRuntime(key) ?? fromBuildTime(key) ?? '';

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
