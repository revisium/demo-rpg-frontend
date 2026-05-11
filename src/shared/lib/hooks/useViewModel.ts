import { useEffect, useMemo } from 'react';

import { container, type Token } from '../DIContainer';
import { isClient } from '../helpers/isClient';
import type { IViewModel } from '../../config';

// Resolves a page ViewModel from the DI container and drives its lifecycle.
//
// SSR path:
//   - resolves the ViewModel synchronously
//   - calls `setup(...args)` so initial render can use seeded state
//   - skips `mount` / `unmount` (no useEffect on the server)
//
// Client path:
//   - resolves once per `(token, args)` pair via useMemo
//   - calls `setup(...args)` synchronously to keep first render in sync
//   - calls `mount(...args)` in useEffect for async side effects
//   - calls `unmount()` on cleanup
//
// `args` are tracked via JSON-serialized signature so route-param changes
// (e.g. `useViewModel(RegionViewModel, regionId)`) re-fire `setup`/`mount`.
// Callers must keep args JSON-serializable.
//
// `setup` / `mount` may return promises; rejections are reported to the
// console rather than discarded so they cannot become silent unhandled
// rejections that crash the Node SSR process.
function reportLifecycleError(
  phase: 'setup' | 'mount' | 'unmount',
  token: { name: string },
  error: unknown,
): void {
  console.error(`[useViewModel] ${token.name}.${phase} rejected`, error);
}

export function useViewModel<VM extends IViewModel, Args extends unknown[]>(
  token: Token<VM>,
  ...args: Args
): VM {
  const argsKey = JSON.stringify(args);

  const viewModel = useMemo(() => {
    const vm = container.get(token);
    try {
      const maybePromise = vm.setup(...args);
      if (maybePromise instanceof Promise) {
        maybePromise.catch((error) => reportLifecycleError('setup', token, error));
      }
    } catch (error) {
      reportLifecycleError('setup', token, error);
    }
    return vm;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, argsKey]);

  useEffect(() => {
    if (!isClient()) return;
    try {
      const maybePromise = viewModel.mount(...args);
      if (maybePromise instanceof Promise) {
        maybePromise.catch((error) => reportLifecycleError('mount', token, error));
      }
    } catch (error) {
      reportLifecycleError('mount', token, error);
    }
    return () => {
      try {
        viewModel.unmount();
      } catch (error) {
        reportLifecycleError('unmount', token, error);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewModel]);

  return viewModel;
}
