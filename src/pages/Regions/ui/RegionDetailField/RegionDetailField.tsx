import { Box, Text } from '@chakra-ui/react';

interface RegionDetailFieldProps {
  readonly label: string;
  readonly value: string;
}

export function RegionDetailField({ label, value }: RegionDetailFieldProps) {
  return (
    <Box>
      <Text as="dt" color="gray.600" fontSize="sm">
        {label}
      </Text>
      <Text as="dd" fontWeight="bold" mt="1">
        {value}
      </Text>
    </Box>
  );
}
