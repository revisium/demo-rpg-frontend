import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import type { ClassLocale } from '../../model/ClassItemViewModel';
import type { ClassesViewModel } from '../../model/ClassesViewModel';

const localeOptions: readonly { value: ClassLocale; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
  { value: 'zh', label: 'ZH' },
];

interface ClassesToolbarProps {
  readonly vm: ClassesViewModel;
}

export const ClassesToolbar = observer(({ vm }: ClassesToolbarProps) => {
  return (
    <Flex align="flex-start" gap="4" justify="space-between" mb="5" wrap={{ base: 'wrap', sm: 'nowrap' }}>
      <Text color="gray.600">
        Showing <Text as="strong">{vm.visibleCount}</Text> of{' '}
        <Text as="strong">{vm.totalCount}</Text> classes
      </Text>

      <ButtonGroup aria-label="Content locale" attached flex="0 0 auto" size="sm" variant="outline">
        {localeOptions.map((option) => (
          <Button
            aria-pressed={vm.locale === option.value}
            colorPalette={vm.locale === option.value ? 'green' : 'gray'}
            key={option.value}
            minH="44px"
            minW="44px"
            onClick={() => vm.setLocale(option.value)}
            variant={vm.locale === option.value ? 'solid' : 'outline'}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
    </Flex>
  );
});
