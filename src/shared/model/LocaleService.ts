import { makeAutoObservable } from 'mobx';

import { container, isClient } from 'src/shared/lib';

export type SupportedLocale = 'en' | 'ru' | 'zh';

export interface LocaleOption {
  readonly value: SupportedLocale;
  readonly label: string;
  readonly nativeLabel: string;
}

const defaultLocaleOption: LocaleOption = { value: 'en', label: 'EN', nativeLabel: 'English' };

const localeOptions: readonly LocaleOption[] = [
  defaultLocaleOption,
  { value: 'ru', label: 'RU', nativeLabel: 'Russian' },
  { value: 'zh', label: 'ZH', nativeLabel: 'Chinese' },
] as const;

class LocaleState {
  public locale: SupportedLocale = 'en';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public setLocale(locale: SupportedLocale): void {
    this.locale = locale;
  }
}

let clientLocaleState: LocaleState | null = null;

function createLocaleState(): LocaleState {
  return new LocaleState();
}

function getLocaleState(): LocaleState {
  if (!isClient()) return createLocaleState();
  clientLocaleState ??= createLocaleState();
  return clientLocaleState;
}

export class LocaleService {
  constructor(private readonly state = getLocaleState()) {}

  public get locale(): SupportedLocale {
    return this.state.locale;
  }

  public get options(): readonly LocaleOption[] {
    return localeOptions;
  }

  public get currentOption(): LocaleOption {
    return localeOptions.find((option) => option.value === this.locale) ?? defaultLocaleOption;
  }

  public setLocale(locale: SupportedLocale): void {
    this.state.setLocale(locale);
  }
}

container.register(LocaleService, () => new LocaleService(), { scope: 'transient' });
