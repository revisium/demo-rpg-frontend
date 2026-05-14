import { Badge, Box, Heading, Text } from '@chakra-ui/react';

export function RegionBackendPanel() {
  return (
    <Box bg="white" borderColor="gray.200" borderRadius="md" borderWidth="1px" p="6">
      <Heading as="h2" fontSize="xl">
        Backend enrichment
      </Heading>
      <Text color="gray.600" lineHeight="1.55" mt="2">
        Likes, views, comments, and federation source links are not present in the composed GraphQL schema yet.
      </Text>
      <Badge colorPalette="gray" mt="4" size="lg" variant="subtle">
        backend pending
      </Badge>
    </Box>
  );
}
