import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { LocaleSwitch, ResultSummary } from 'src/shared/ui';
import type { RegionsViewModel } from '../../model/RegionsViewModel';

interface RegionsToolbarProps {
  readonly vm: RegionsViewModel;
}

export const RegionsToolbar = observer(({ vm }: RegionsToolbarProps) => {
  return (
    <Flex align="flex-start" gap="4" justify="space-between" mb="5" wrap={{ base: 'wrap', sm: 'nowrap' }}>
      <Box>
        <ResultSummary entityLabel="regions" totalCount={vm.totalCount} visibleCount={vm.visibleCount} />
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
              onClick={() => void vm.setClimate(null)}
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
                onClick={() => void vm.setClimate(climate)}
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

      <LocaleSwitch onChange={(locale) => vm.setLocale(locale)} value={vm.locale} />
    </Flex>
  );
});
