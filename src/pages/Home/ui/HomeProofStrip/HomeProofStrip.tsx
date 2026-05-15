import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';

const proofNodes = [
  {
    label: 'Rows',
    value: 'demo-rpg-data',
    bg: 'blue.50',
    border: 'blue.200',
    color: 'blue.800',
  },
  {
    label: 'Schema',
    value: 'GraphQL types',
    bg: 'green.50',
    border: 'green.200',
    color: 'green.800',
  },
  {
    label: 'Pages',
    value: 'MVVM slices',
    bg: 'purple.50',
    border: 'purple.200',
    color: 'purple.800',
  },
  {
    label: 'Sources',
    value: 'Explainer widget',
    bg: 'orange.50',
    border: 'orange.200',
    color: 'orange.800',
  },
] as const;

export function HomeProofStrip() {
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
        {proofNodes.map((node, index) => (
          <Flex
            align="center"
            borderLeftColor="gray.200"
            borderLeftWidth={{ base: '0', md: index === 0 ? '0' : '1px' }}
            borderTopColor="gray.200"
            borderTopWidth={{ base: index === 0 ? '0' : '1px', md: '0' }}
            gap="3"
            key={node.label}
            minH="96px"
            p="5"
          >
            <Box
              alignItems="center"
              bg={node.bg}
              borderColor={node.border}
              borderRadius="md"
              borderWidth="1px"
              color={node.color}
              display="flex"
              flex="0 0 auto"
              fontWeight="bold"
              h="10"
              justifyContent="center"
              w="10"
            >
              {index + 1}
            </Box>
            <Box minW="0">
              <Text color="gray.600" fontSize="sm">
                {node.label}
              </Text>
              <Text fontWeight="bold">{node.value}</Text>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}
