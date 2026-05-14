import { Box, Skeleton, Stack } from '@chakra-ui/react';

export function RegionDetailSkeleton() {
  return (
    <Stack gap="4">
      <Box bg="white" borderColor="gray.200" borderRadius="md" borderWidth="1px" p="6">
        <Skeleton h="6" mb="4" w="180px" />
        <Skeleton h="4" mb="3" />
        <Skeleton h="4" mb="3" />
        <Skeleton h="4" w="60%" />
      </Box>
      <Box bg="white" borderColor="gray.200" borderRadius="md" borderWidth="1px" p="6">
        <Skeleton h="6" mb="4" w="160px" />
        <Skeleton h="4" mb="3" />
        <Skeleton h="4" w="70%" />
      </Box>
    </Stack>
  );
}
