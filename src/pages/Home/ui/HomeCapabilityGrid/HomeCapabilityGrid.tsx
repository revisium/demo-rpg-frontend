import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import type { HomeCapability } from '../../model/HomeViewModel';
import { HomeCapabilityCard } from '../HomeCapabilityCard/HomeCapabilityCard';

interface HomeCapabilityGridProps {
  readonly capabilities: readonly HomeCapability[];
}

export function HomeCapabilityGrid({ capabilities }: HomeCapabilityGridProps) {
  return (
    <Box as="section" aria-labelledby="home-capabilities-title">
      <Heading as="h2" fontSize="2xl" id="home-capabilities-title">
        Capability map
      </Heading>
      <Text color="gray.600" lineHeight="1.6" maxW="760px" mt="2">
        Each card points to the fastest page for proving one product claim. Live routes are
        usable now; next and blocked routes keep their implementation status visible.
      </Text>
      <SimpleGrid as="div" columns={{ base: 1, md: 2, xl: 3 }} gap="5" mt="6">
        {capabilities.map((capability) => (
          <HomeCapabilityCard capability={capability} key={capability.title} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
