import { Box, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';

interface CatalogSkeletonProps {
  readonly ariaLabel: string;
  readonly columns: Record<string, number>;
  readonly itemCount: number;
}

export function CatalogSkeleton({ ariaLabel, columns, itemCount }: CatalogSkeletonProps) {
  return (
    <SimpleGrid aria-label={ariaLabel} columns={columns} gap="4">
      {Array.from({ length: itemCount }, (_, index) => (
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
