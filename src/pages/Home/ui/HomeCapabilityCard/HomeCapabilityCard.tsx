import { Badge, Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import type { HomeCapability } from '../../model/HomeViewModel';

interface HomeCapabilityCardProps {
  readonly capability: HomeCapability;
}

const statusLabel: Record<HomeCapability['status'], string> = {
  blocked: 'blocked',
  live: 'live',
  next: 'next',
};

const statusPalette: Record<HomeCapability['status'], 'gray' | 'green' | 'purple'> = {
  blocked: 'gray',
  live: 'green',
  next: 'purple',
};

export function HomeCapabilityCard({ capability }: HomeCapabilityCardProps) {
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
        <Badge colorPalette={statusPalette[capability.status]} variant="subtle">
          {statusLabel[capability.status]}
        </Badge>
        <Text color="blue.700" fontSize="sm" fontWeight="bold" mt="4">
          {capability.label}
        </Text>
        <Heading as="h3" fontSize="xl" lineHeight="1.2" mt="2">
          {capability.title}
        </Heading>
        <Text color="gray.600" lineHeight="1.55" mt="3">
          {capability.description}
        </Text>
      </Box>

      <Button
        asChild
        alignSelf="end"
        colorPalette="green"
        size="sm"
        variant="outline"
        w="fit-content"
        _groupHover={{ bg: 'green.600', color: 'white', transform: 'translateX(2px)' }}
      >
        <RouterLink to={capability.href}>Open proof</RouterLink>
      </Button>
    </Box>
  );
}
