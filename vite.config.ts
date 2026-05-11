import { defineConfig, loadEnv } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'node:path';
import packageJson from './package.json' with { type: 'json' };

const ENV_DIR = '.env';
const ENV_PREFIX = 'REACT_APP_';

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, ENV_DIR, ENV_PREFIX);
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
