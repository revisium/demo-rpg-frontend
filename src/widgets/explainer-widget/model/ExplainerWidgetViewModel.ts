import { makeAutoObservable } from 'mobx';

import type { IViewModel } from 'src/shared/config';
import { container } from 'src/shared/lib';

export class ExplainerWidgetViewModel implements IViewModel {
  public isMobileOpen = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public setup(): void {
    // No route or descriptor setup required.
  }

  public mount(): void {
    // Pure UI state; no side effects.
  }

  public unmount(): void {
    this.isMobileOpen = false;
  }

  public toggleMobileOpen(): void {
    this.isMobileOpen = !this.isMobileOpen;
  }
}

container.register(
  ExplainerWidgetViewModel,
  () => new ExplainerWidgetViewModel(),
  { scope: 'transient' },
);
