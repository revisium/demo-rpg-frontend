import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';

export function ClassesHeader() {
  return (
    <Box as="section" aria-labelledby="classes-title" mb="8">
      <Text color="blue.700" fontSize="sm" fontWeight="bold" mb="2">
        data.classes
      </Text>
      <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} id="classes-title" lineHeight="1.05">
        Classes
      </Heading>
      <Text color="gray.600" fontSize="lg" lineHeight="1.6" maxW="720px" mt="3">
        A compact Revisium reference table used as a hero foreign-key target.
      </Text>
      <Flex aria-label="Capabilities" gap="2" mt="5" wrap="wrap">
        <Badge colorPalette="blue" size="lg" variant="subtle">
          data subgraph
        </Badge>
        <Badge size="lg" variant="outline">
          reference table
        </Badge>
        <Badge size="lg" variant="outline">
          FK target
        </Badge>
      </Flex>
    </Box>
  );
}
