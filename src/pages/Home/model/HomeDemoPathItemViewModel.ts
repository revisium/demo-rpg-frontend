interface HomeDemoPathItemParams {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly index: number;
}

export class HomeDemoPathItemViewModel {
  public readonly title: string;
  public readonly description: string;
  public readonly href: string;
  private readonly index: number;

  constructor(params: HomeDemoPathItemParams) {
    this.title = params.title;
    this.description = params.description;
    this.href = params.href;
    this.index = params.index;
  }

  public get key(): string {
    return this.href;
  }

  public get stepLabel(): string {
    return `Step ${this.index + 1}`;
  }
}
