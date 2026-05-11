import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenvConfig } from 'dotenv';
import * as path from 'node:path';

const ENV_DIR = '.env';
dotenvConfig({ path: path.join(ENV_DIR, '.env') });
dotenvConfig({ path: path.join(ENV_DIR, '.env.development'), override: true });
dotenvConfig({ path: path.join(ENV_DIR, '.env.development.local'), override: true });

const env = process.env;

const args = process.argv.slice(2);
const isDownload = args.includes('--download');

const disablePlugin = {
  add: { content: ['// @ts-ignore'] },
};

const scalars = {
  DateTime: 'number | string',
  JSON: 'unknown',
  JSONObject: 'Record<string, unknown>',
};

const schemaUrl = env.REACT_APP_GRAPHQL_SCHEMA_URL || env.REACT_APP_GRAPHQL_SERVER_URL;

if (!schemaUrl) {
  throw new Error(
    'codegen.ts: set REACT_APP_GRAPHQL_SCHEMA_URL (or REACT_APP_GRAPHQL_SERVER_URL) in .env/.env or .env/.env.development',
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
            plugins: [disablePlugin, 'typescript', 'typescript-operations', 'typescript-graphql-request'],
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
