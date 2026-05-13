import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';

export function RegionsSkeleton() {
  return (
    <SimpleGrid aria-label="Loading regions" columns={{ base: 1, md: 2, xl: 3 }} gap="4">
      {Array.from({ length: 6 }, (_, index) => (
        <Stack
          bg="white"
          borderColor="gray.200"
          borderRadius="md"
          borderWidth="1px"
          gap="5"
          key={index}
          minH="260px"
          p="5"
        >
          <Skeleton h="7" w="92px" />
          <Skeleton h="7" w="70%" />
          <Box>
            <Skeleton h="4" mb="2" />
            <Skeleton h="4" />
          </Box>
        </Stack>
      ))}
    </SimpleGrid>
  );
}
