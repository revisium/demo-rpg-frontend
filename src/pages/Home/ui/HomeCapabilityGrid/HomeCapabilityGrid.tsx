import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import type { HomeViewModel } from '../../model/HomeViewModel';
import { HomeCapabilityCard } from '../HomeCapabilityCard/HomeCapabilityCard';

interface HomeCapabilityGridProps {
  readonly vm: HomeViewModel;
}

export const HomeCapabilityGrid = observer(({ vm }: HomeCapabilityGridProps) => {
  const { capabilitySection } = vm;

  return (
    <Box as="section" aria-labelledby="home-capabilities-title">
      <Heading as="h2" fontSize="2xl" id="home-capabilities-title">
        {capabilitySection.title}
      </Heading>
      <Text color="gray.600" lineHeight="1.6" maxW="760px" mt="2">
        {capabilitySection.description}
      </Text>
      <SimpleGrid as="div" columns={{ base: 1, md: 2, xl: 3 }} gap="5" mt="6">
        {vm.capabilities.map((item) => (
          <HomeCapabilityCard item={item} key={item.key} />
        ))}
      </SimpleGrid>
    </Box>
  );
});
