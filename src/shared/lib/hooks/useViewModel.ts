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
//   - resolves once per component instance via useMemo
//   - calls `setup(...args)` synchronously to keep first render in sync
//   - calls `mount(...args)` in useEffect for async side effects
//   - calls `unmount()` on cleanup
export function useViewModel<VM extends IViewModel, Args extends unknown[]>(
  token: Token<VM>,
  ...args: Args
): VM {
  const viewModel = useMemo(() => {
    const vm = container.get(token);
    void vm.setup(...args);
    return vm;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (!isClient()) return;
    void viewModel.mount(...args);
    return () => {
      viewModel.unmount();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewModel]);

  return viewModel;
}
