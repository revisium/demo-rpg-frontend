interface HomeProofItemParams {
  readonly label: string;
  readonly value: string;
  readonly bg: string;
  readonly border: string;
  readonly color: string;
  readonly index: number;
}

export class HomeProofItemViewModel {
  public readonly label: string;
  public readonly value: string;
  public readonly bg: string;
  public readonly border: string;
  public readonly color: string;
  private readonly index: number;

  constructor(params: HomeProofItemParams) {
    this.label = params.label;
    this.value = params.value;
    this.bg = params.bg;
    this.border = params.border;
    this.color = params.color;
    this.index = params.index;
  }

  public get key(): string {
    return this.label;
  }

  public get sequenceLabel(): string {
    return String(this.index + 1);
  }

  public get showDesktopDivider(): boolean {
    return this.index > 0;
  }

  public get showMobileDivider(): boolean {
    return this.index > 0;
  }
}
