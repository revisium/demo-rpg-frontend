import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import type { RegionLocale } from '../../model/RegionItemViewModel';
import type { RegionsViewModel } from '../../model/RegionsViewModel';

const localeOptions: readonly { value: RegionLocale; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
  { value: 'zh', label: 'ZH' },
];

interface RegionsToolbarProps {
  readonly vm: RegionsViewModel;
}

export const RegionsToolbar = observer(({ vm }: RegionsToolbarProps) => {
  return (
    <Flex align="flex-start" gap="4" justify="space-between" mb="5" wrap={{ base: 'wrap', sm: 'nowrap' }}>
      <Box>
        <Text color="gray.600">
          Showing <Text as="strong">{vm.visibleCount}</Text> of{' '}
          <Text as="strong">{vm.totalCount}</Text> regions
        </Text>
        <Text color="gray.600" fontSize="sm" mt="1">
          Filter: <Text as="strong">{vm.activeFilterLabel}</Text>
        </Text>
        {vm.climates.length > 0 ? (
          <Flex aria-label="Visible climates" gap="2" mt="2" wrap="wrap">
            <Button
              aria-pressed={vm.activeClimate === null}
              colorPalette={vm.activeClimate === null ? 'green' : 'gray'}
              minH="44px"
              minW="44px"
              onClick={() => vm.setClimate(null)}
              size="sm"
              type="button"
              variant={vm.activeClimate === null ? 'solid' : 'outline'}
            >
              All
            </Button>
            {vm.climates.map((climate) => (
              <Button
                aria-pressed={vm.activeClimate === climate}
                colorPalette={vm.activeClimate === climate ? 'green' : 'gray'}
                key={climate}
                minH="44px"
                minW="44px"
                onClick={() => vm.setClimate(climate)}
                size="sm"
                type="button"
                variant={vm.activeClimate === climate ? 'solid' : 'outline'}
              >
                {climate}
              </Button>
            ))}
          </Flex>
        ) : null}
      </Box>

      <ButtonGroup
        aria-label="Content locale"
        attached
        flex="0 0 auto"
        size="sm"
        variant="outline"
      >
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
