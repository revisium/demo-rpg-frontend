/* eslint-disable no-console */
/* Thin wrapper around `graphql-codegen --config codegen.ts` that:
 *   - skips when src/ has no *.graphql documents (avoids spurious errors on fresh clones)
 *   - forwards extra flags (e.g. --download) so codegen.ts can branch
 */
import { spawn } from 'node:child_process';
import { glob } from 'glob';
import process from 'node:process';

const args = process.argv.slice(2);

const documents = await glob('src/**/*.graphql', { ignore: ['src/__generated__/**'] });

if (documents.length === 0 && !args.includes('--download')) {
  console.warn('[gql-codegen] no *.graphql documents under src/ — skipping');
  process.exit(0);
}

const child = spawn('npx', ['graphql-codegen', '--config', 'codegen.ts', ...args], {
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal !== null) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
