import { defineConfig, loadEnv, type ProxyOptions } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'node:path';
import packageJson from './package.json' with { type: 'json' };

const ENV_DIR = '.env';
const ENV_PREFIX = 'REACT_APP_';
const GRAPHQL_PROXY_PATH = '/graphql';

const createGraphqlProxy = (
  targetEndpoint: string | undefined,
): Record<string, ProxyOptions> | undefined => {
  if (!targetEndpoint) return undefined;

  const targetUrl = new URL(targetEndpoint);
  const targetPath = targetUrl.pathname.replace(/\/$/, '') || GRAPHQL_PROXY_PATH;

  return {
    [GRAPHQL_PROXY_PATH]: {
      target: targetUrl.origin,
      changeOrigin: true,
      secure: true,
      rewrite: (requestPath) => {
        const requestUrl = new URL(requestPath, 'http://localhost');
        const suffix = requestUrl.pathname.slice(GRAPHQL_PROXY_PATH.length);
        return `${targetPath}${suffix}${requestUrl.search}`;
      },
    },
  };
};

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, ENV_DIR, '');
  Object.assign(process.env, env);

  return defineConfig({
    plugins: [
      reactRouter(),
      svgr({ include: '**/*.svg' }),
      checker({ typescript: true }),
    ],
    resolve: {
      alias: {
        src: resolve(__dirname, 'src'),
      },
    },
    server: {
      port: Number(process.env.REACT_APP_PORT) || 5173,
      proxy: createGraphqlProxy(process.env.GRAPHQL_PROXY_TARGET),
    },
    envDir: ENV_DIR,
    envPrefix: ENV_PREFIX,
    define: {
      'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
      'import.meta.env.GIT_COMMIT_HASH': `"${process.env.COMMIT_HASH ?? 'unknown'}"`,
      'import.meta.env.GIT_BRANCH_NAME': `"${process.env.BRANCH_NAME ?? 'unknown'}"`,
    },
  });
};
