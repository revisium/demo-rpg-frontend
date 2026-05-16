import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';

export function RegionsHeader() {
  return (
    <Box as="section" aria-labelledby="regions-title" mb="8">
      <Text color="#67e8f9" fontSize="sm" fontWeight="bold" mb="2">
        data.regions
      </Text>
      <Heading as="h1" fontSize="4xl" id="regions-title" lineHeight="1.05">
        Regions
      </Heading>
      <Text color="#9aa7b1" fontSize="lg" lineHeight="1.6" maxW="720px" mt="3">
        A localized Revisium catalog rendered from typed GraphQL connection data.
      </Text>
      <Flex aria-label="Capabilities" gap="2" mt="5" wrap="wrap">
        <Badge colorPalette="blue" size="lg" variant="subtle">
          data.regions
        </Badge>
        <Badge size="lg" variant="outline">
          enum
        </Badge>
        <Badge size="lg" variant="outline">
          localized strings
        </Badge>
        <Badge size="lg" variant="outline">
          pagination
        </Badge>
      </Flex>
    </Box>
  );
}
