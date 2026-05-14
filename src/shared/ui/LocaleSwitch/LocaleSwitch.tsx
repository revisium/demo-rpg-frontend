import { Button, ButtonGroup } from '@chakra-ui/react';

const localeOptions = [
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
  { value: 'zh', label: 'ZH' },
] as const;

interface LocaleSwitchProps<TLocale extends string> {
  readonly value: TLocale;
  readonly onChange: (value: TLocale) => void;
}

export function LocaleSwitch<TLocale extends string>({ onChange, value }: LocaleSwitchProps<TLocale>) {
  return (
    <ButtonGroup aria-label="Content locale" attached flex="0 0 auto" size="sm" variant="outline">
      {localeOptions.map((option) => {
        const optionValue = option.value as TLocale;
        const isSelected = value === optionValue;

        return (
          <Button
            aria-pressed={isSelected}
            colorPalette={isSelected ? 'green' : 'gray'}
            key={option.value}
            minH="44px"
            minW="44px"
            onClick={() => onChange(optionValue)}
            variant={isSelected ? 'solid' : 'outline'}
          >
            {option.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
