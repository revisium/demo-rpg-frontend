import { Box, Heading, Link, Text } from '@chakra-ui/react';

import type { HomeSourceLinkItemViewModel } from '../../model/HomeSourceLinkItemViewModel';

interface HomeSourceLinkCardProps {
  readonly item: HomeSourceLinkItemViewModel;
}

export function HomeSourceLinkCard({ item }: HomeSourceLinkCardProps) {
  return (
    <Box
      as="article"
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      borderWidth="1px"
      p="5"
    >
      <Heading as="h3" fontSize="lg">
        <Link
          alignItems="center"
          color="green.800"
          display="inline-flex"
          href={item.href}
          minH="11"
          rel={item.rel}
          target={item.target}
        >
          {item.title}
        </Link>
      </Heading>
      <Text color="gray.600" lineHeight="1.55" mt="2">
        {item.description}
      </Text>
    </Box>
  );
}
