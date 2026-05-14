import { makeAutoObservable } from 'mobx';

import type { IViewModel } from 'src/shared/config';
import { container } from 'src/shared/lib';

export type ExplainerTechnicalSectionId =
  | 'graphql'
  | 'rest'
  | 'mcp'
  | 'variables'
  | 'responseSample'
  | 'federationSdl';

export class ExplainerWidgetViewModel implements IViewModel {
  public isMobileOpen = false;
  private readonly openTechnicalSections = new Set<ExplainerTechnicalSectionId>();

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
    this.openTechnicalSections.clear();
  }

  public toggleMobileOpen(): void {
    this.isMobileOpen = !this.isMobileOpen;
  }

  public isTechnicalSectionOpen(section: ExplainerTechnicalSectionId): boolean {
    return this.openTechnicalSections.has(section);
  }

  public toggleTechnicalSection(section: ExplainerTechnicalSectionId): void {
    if (this.openTechnicalSections.has(section)) {
      this.openTechnicalSections.delete(section);
      return;
    }
    this.openTechnicalSections.add(section);
  }
}

container.register(
  ExplainerWidgetViewModel,
  () => new ExplainerWidgetViewModel(),
  { scope: 'transient' },
);
