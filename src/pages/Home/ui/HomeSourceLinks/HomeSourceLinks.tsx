import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import type { HomeViewModel } from '../../model/HomeViewModel';
import { HomeSourceLinkCard } from '../HomeSourceLinkCard/HomeSourceLinkCard';

interface HomeSourceLinksProps {
  readonly vm: HomeViewModel;
}

export const HomeSourceLinks = observer(({ vm }: HomeSourceLinksProps) => {
  return (
    <Box as="section" aria-labelledby="home-source-links-title">
      <Heading as="h2" fontSize="2xl" id="home-source-links-title">
        {vm.sourceLinksSection.title}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="4" mt="6">
        {vm.sourceLinks.map((item) => (
          <HomeSourceLinkCard item={item} key={item.key} />
        ))}
      </SimpleGrid>
    </Box>
  );
});
