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

export function LocaleSwitch<TLocale extends string>({
  onChange,
  value,
}: LocaleSwitchProps<TLocale>) {
  return (
    <ButtonGroup aria-label="Content locale" attached flex="0 0 auto" size="sm" variant="outline">
      {localeOptions.map((option) => {
        const optionValue = option.value as TLocale;
        const isSelected = value === optionValue;

        return (
          <Button
            aria-pressed={isSelected}
            bg={isSelected ? '#22d3ee' : 'transparent'}
            borderColor={isSelected ? '#67e8f9' : 'rgba(103, 232, 249, 0.24)'}
            color={isSelected ? '#071018' : '#c9d2da'}
            key={option.value}
            minH="44px"
            minW="44px"
            onClick={() => onChange(optionValue)}
            variant={isSelected ? 'solid' : 'outline'}
            _hover={{ bg: isSelected ? '#67e8f9' : 'rgba(34, 211, 238, 0.12)' }}
          >
            {option.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
