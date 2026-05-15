import { Box, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react';

import type { HomeSourceLink } from '../../model/HomeViewModel';

interface HomeSourceLinksProps {
  readonly links: readonly HomeSourceLink[];
}

export function HomeSourceLinks({ links }: HomeSourceLinksProps) {
  return (
    <Box as="section" aria-labelledby="home-source-links-title">
      <Heading as="h2" fontSize="2xl" id="home-source-links-title">
        Source links
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="4" mt="6">
        {links.map((sourceLink) => (
          <Box
            as="article"
            bg="white"
            borderColor="gray.200"
            borderRadius="md"
            borderWidth="1px"
            key={sourceLink.title}
            p="5"
          >
            <Heading as="h3" fontSize="lg">
              <Link color="green.800" href={sourceLink.href} rel="noreferrer" target="_blank">
                {sourceLink.title}
              </Link>
            </Heading>
            <Text color="gray.600" lineHeight="1.55" mt="2">
              {sourceLink.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
