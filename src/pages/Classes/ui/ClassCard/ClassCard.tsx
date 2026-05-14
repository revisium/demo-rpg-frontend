import { Badge, Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Link as RouterLink } from 'react-router';

import type { ClassItemViewModel } from '../../model/ClassItemViewModel';

interface ClassCardProps {
  readonly item: ClassItemViewModel;
}

export const ClassCard = observer(({ item }: ClassCardProps) => {
  return (
    <Box
      as="li"
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      borderWidth="1px"
      display="grid"
      gap="5"
      p="5"
    >
      <Box>
        <Flex align="center" color="gray.600" fontSize="sm" gap="3" justify="space-between">
          <Badge colorPalette="purple" variant="subtle">
            {item.primaryStat}
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

      <SimpleGrid borderTopColor="gray.200" borderTopWidth="1px" columns={{ base: 1, sm: 3 }} gap="3" pt="4">
        <Stat label="Base HP" value={item.baseHpLabel} />
        <Stat label="HP growth" value={item.hpPerLevelLabel} />
        <Stat label="MP growth" value={item.mpPerLevelLabel} />
      </SimpleGrid>

      <Button asChild colorPalette="green" minH="44px" variant="outline">
        <RouterLink to={item.heroesHref}>Filter heroes</RouterLink>
      </Button>
    </Box>
  );
});

interface StatProps {
  readonly label: string;
  readonly value: string;
}

function Stat({ label, value }: StatProps) {
  return (
    <Box>
      <Text color="gray.600" fontSize="xs">
        {label}
      </Text>
      <Text fontWeight="bold" mt="1">
        {value}
      </Text>
    </Box>
  );
}
