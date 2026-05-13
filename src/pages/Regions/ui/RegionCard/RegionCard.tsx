import { Badge, Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Link as RouterLink } from 'react-router';

import type { RegionItemViewModel } from '../../model/RegionItemViewModel';

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
      minH="260px"
      p="5"
    >
      <Box>
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

      <SimpleGrid borderTopColor="gray.200" borderTopWidth="1px" columns={{ base: 1, sm: 2 }} gap="3" pt="4">
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

      <Button asChild colorPalette="green" size="sm" variant="outline">
        <RouterLink to={item.detailHref}>Open region</RouterLink>
      </Button>
    </Box>
  );
});
