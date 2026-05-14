import { Badge, Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Link as RouterLink } from 'react-router';

import type { RegionItemViewModel } from '../../model/RegionItemViewModel';
import { RegionClimateVisual } from '../RegionClimateVisual/RegionClimateVisual';

interface RegionCardProps {
  readonly item: RegionItemViewModel;
}

export const RegionCard = observer(({ item }: RegionCardProps) => {
  return (
    <Box
      as="li"
      alignContent="space-between"
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      borderWidth="1px"
      display="grid"
      gap="5"
      outline="none"
      position="relative"
      role="group"
      shadow="0 1px 2px rgba(15, 23, 42, 0.04)"
      transition="transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease"
      minH="260px"
      overflow="hidden"
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
      css={{
        '&:hover .region-card-visual, &:focus-within .region-card-visual': {
          transform: 'scale(1.035)',
        },
      }}
    >
      <RegionClimateVisual climate={item.climate} regionId={item.id} zoomOnGroupHover />

      <Box px="5">
        <Flex align="center" color="gray.600" fontSize="sm" gap="3" justify="space-between">
          <Badge colorPalette="green" variant="subtle">
            {item.climate}
          </Badge>
          <Text>{item.localeLabel}</Text>
        </Flex>
        <Heading as="h2" fontSize="xl" lineHeight="1.2" mt="4">
          {item.title}
        </Heading>
        <Text color="gray.600" lineHeight="1.55" mt="2">
          {item.description}
        </Text>
      </Box>

      <SimpleGrid
        as="dl"
        borderTopColor="gray.200"
        borderTopWidth="1px"
        columns={{ base: 1, sm: 2 }}
        gap="3"
        mx="5"
        pt="4"
      >
        <Box>
          <Text as="dt" color="gray.600" fontSize="xs">
            Published
          </Text>
          <Text as="dd" fontWeight="bold" mt="1">
            {item.publishedLabel}
          </Text>
        </Box>
        <Box>
          <Text as="dt" color="gray.600" fontSize="xs">
            Version
          </Text>
          <Text as="dd" fontWeight="bold" mt="1">
            {item.versionLabel}
          </Text>
        </Box>
      </SimpleGrid>

      <Box px="5" pb="5">
        <Button
          asChild
          colorPalette="green"
          size="sm"
          transition="background-color 160ms ease, color 160ms ease, transform 160ms ease"
          variant="outline"
          _groupHover={{ bg: 'green.600', color: 'white', transform: 'translateX(2px)' }}
        >
          <RouterLink to={item.detailHref}>Open region</RouterLink>
        </Button>
      </Box>
    </Box>
  );
});
