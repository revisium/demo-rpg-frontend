import { Box, SimpleGrid } from '@chakra-ui/react';

import type { HomeViewModel } from '../../model/HomeViewModel';
import { HomeProofStripItem } from '../HomeProofStripItem/HomeProofStripItem';

interface HomeProofStripProps {
  readonly vm: HomeViewModel;
}

export function HomeProofStrip({ vm }: HomeProofStripProps) {
  return (
    <Box
      aria-label="Revisium delivery path"
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      borderWidth="1px"
      overflow="hidden"
    >
      <SimpleGrid columns={{ base: 1, md: 4 }}>
        {vm.proofNodes.map((item) => (
          <HomeProofStripItem item={item} key={item.key} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
