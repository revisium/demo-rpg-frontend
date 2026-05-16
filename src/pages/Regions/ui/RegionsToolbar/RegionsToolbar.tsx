import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { LocaleSwitch, ResultSummary } from 'src/shared/ui';
import type { RegionsViewModel } from '../../model/RegionsViewModel';

interface RegionsToolbarProps {
  readonly vm: RegionsViewModel;
}

export const RegionsToolbar = observer(({ vm }: RegionsToolbarProps) => {
  return (
    <Flex
      align="flex-start"
      gap="4"
      justify="space-between"
      mb="5"
      wrap={{ base: 'wrap', sm: 'nowrap' }}
    >
      <Box>
        <ResultSummary
          entityLabel="regions"
          totalCount={vm.totalCount}
          visibleCount={vm.visibleCount}
        />
        <Text color="#9aa7b1" fontSize="sm" mt="1">
          Filter: <Text as="strong">{vm.activeFilterLabel}</Text>
        </Text>
        {vm.climates.length > 0 ? (
          <Flex aria-label="Visible climates" gap="2" mt="2" wrap="wrap">
            <Button
              aria-pressed={vm.activeClimate === null}
              bg={vm.activeClimate === null ? '#22d3ee' : 'transparent'}
              borderColor={vm.activeClimate === null ? '#67e8f9' : 'rgba(103, 232, 249, 0.24)'}
              color={vm.activeClimate === null ? '#071018' : '#c9d2da'}
              minH="44px"
              minW="44px"
              onClick={() => void vm.setClimate(null)}
              size="sm"
              type="button"
              variant={vm.activeClimate === null ? 'solid' : 'outline'}
              _hover={{ bg: vm.activeClimate === null ? '#67e8f9' : 'rgba(34, 211, 238, 0.12)' }}
            >
              All
            </Button>
            {vm.climates.map((climate) => (
              <Button
                aria-pressed={vm.activeClimate === climate}
                bg={vm.activeClimate === climate ? '#22d3ee' : 'transparent'}
                borderColor={vm.activeClimate === climate ? '#67e8f9' : 'rgba(103, 232, 249, 0.24)'}
                color={vm.activeClimate === climate ? '#071018' : '#c9d2da'}
                key={climate}
                minH="44px"
                minW="44px"
                onClick={() => void vm.setClimate(climate)}
                size="sm"
                type="button"
                variant={vm.activeClimate === climate ? 'solid' : 'outline'}
                _hover={{
                  bg: vm.activeClimate === climate ? '#67e8f9' : 'rgba(34, 211, 238, 0.12)',
                }}
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
