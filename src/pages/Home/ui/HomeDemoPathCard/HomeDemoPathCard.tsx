import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import type { HomeDemoPathItemViewModel } from '../../model/HomeDemoPathItemViewModel';

interface HomeDemoPathCardProps {
  readonly item: HomeDemoPathItemViewModel;
}

export function HomeDemoPathCard({ item }: HomeDemoPathCardProps) {
  return (
    <Box
      as="li"
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      borderWidth="1px"
      p="5"
    >
      <Text color="green.700" fontSize="sm" fontWeight="bold">
        {item.stepLabel}
      </Text>
      <Heading as="h3" fontSize="lg" lineHeight="1.25" mt="2">
        {item.title}
      </Heading>
      <Text color="gray.600" lineHeight="1.55" mt="2">
        {item.description}
      </Text>
      <Button asChild colorPalette="green" minH="11" mt="4" size="md" variant="ghost">
        <RouterLink to={item.href}>Open</RouterLink>
      </Button>
    </Box>
  );
}
