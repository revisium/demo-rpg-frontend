interface HomeSourceLinkItemParams {
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

export class HomeSourceLinkItemViewModel {
  public readonly title: string;
  public readonly description: string;
  public readonly href: string;
  public readonly target = '_blank';
  public readonly rel = 'noreferrer';

  constructor(params: HomeSourceLinkItemParams) {
    this.title = params.title;
    this.description = params.description;
    this.href = params.href;
  }

  public get key(): string {
    return this.href;
  }
}
