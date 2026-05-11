import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenvConfig } from 'dotenv';
import * as path from 'node:path';

const ENV_DIR = '.env';
const mode = process.env.NODE_ENV ?? 'development';
// Vite-style precedence (highest wins). dotenv does not overwrite keys that
// are already set, so loading from highest priority to lowest yields the
// correct effective value for each key.
dotenvConfig({ path: path.join(ENV_DIR, `.env.${mode}.local`) });
dotenvConfig({ path: path.join(ENV_DIR, '.env.local') });
dotenvConfig({ path: path.join(ENV_DIR, `.env.${mode}`) });
dotenvConfig({ path: path.join(ENV_DIR, '.env') });

const env = process.env;

const args = process.argv.slice(2);
const isDownload = args.includes('--download');

const scalars = {
  DateTime: 'number | string',
  JSON: 'unknown',
  JSONObject: 'Record<string, unknown>',
};

const schemaUrl = env.REACT_APP_GRAPHQL_SCHEMA_URL || env.REACT_APP_GRAPHQL_SERVER_URL;

if (!schemaUrl) {
  throw new Error(
    `codegen.ts: set REACT_APP_GRAPHQL_SCHEMA_URL (or REACT_APP_GRAPHQL_SERVER_URL) in .env/.env or .env/.env.${mode}`,
  );
}

const config: CodegenConfig = {
  overwrite: true,
  schema: schemaUrl,
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/__generated__/schema.graphql': {
      plugins: ['schema-ast'],
      config: { includeDirectives: true },
    },
    ...(isDownload
      ? {}
      : {
          './src/__generated__/graphql-request.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
            config: {
              rawRequest: false,
              skipTypename: true,
              scalars,
            },
          },
        }),
  },
};

export default config;
