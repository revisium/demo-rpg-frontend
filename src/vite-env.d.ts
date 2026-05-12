/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly REACT_APP_GRAPHQL_SERVER_URL: string;
  readonly REACT_APP_GRAPHQL_SCHEMA_URL?: string;
  readonly REACT_APP_PORT?: string;
  readonly PACKAGE_VERSION: string;
  readonly GIT_COMMIT_HASH: string;
  readonly GIT_BRANCH_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
