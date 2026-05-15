import { Badge, Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import type { HomeCapabilityItemViewModel } from '../../model/HomeCapabilityItemViewModel';

interface HomeCapabilityCardProps {
  readonly item: HomeCapabilityItemViewModel;
}

export function HomeCapabilityCard({ item }: HomeCapabilityCardProps) {
  return (
    <Box
      as="article"
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      borderWidth="1px"
      display="grid"
      gap="5"
      minH="230px"
      p="5"
      role="group"
      shadow="0 1px 2px rgba(15, 23, 42, 0.04)"
      transition="transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease"
      _focusWithin={{
        borderColor: 'green.500',
        boxShadow: '0 0 0 3px rgba(36, 107, 84, 0.18), 0 14px 30px rgba(15, 23, 42, 0.12)',
        transform: 'translateY(-2px)',
      }}
      _hover={{
        borderColor: 'green.400',
        boxShadow: '0 14px 30px rgba(15, 23, 42, 0.12)',
        transform: 'translateY(-2px)',
      }}
    >
      <Box>
        <Badge colorPalette={item.statusPalette} variant="subtle">
          {item.statusLabel}
        </Badge>
        <Text color="blue.700" fontSize="sm" fontWeight="bold" mt="4">
          {item.label}
        </Text>
        <Heading as="h3" fontSize="xl" lineHeight="1.2" mt="2">
          {item.title}
        </Heading>
        <Text color="gray.600" lineHeight="1.55" mt="3">
          {item.description}
        </Text>
      </Box>

      <Button
        asChild
        alignSelf="end"
        colorPalette="green"
        minH="11"
        size="md"
        variant="outline"
        w="fit-content"
        _groupHover={{ bg: 'green.600', color: 'white', transform: 'translateX(2px)' }}
      >
        <RouterLink to={item.href}>Open proof</RouterLink>
      </Button>
    </Box>
  );
}
