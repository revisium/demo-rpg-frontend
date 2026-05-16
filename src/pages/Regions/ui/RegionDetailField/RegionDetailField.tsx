import { Box, Text } from '@chakra-ui/react';

interface RegionDetailFieldProps {
  readonly label: string;
  readonly value: string;
}

export function RegionDetailField({ label, value }: RegionDetailFieldProps) {
  return (
    <Box
      borderColor="transparent"
      borderRadius="md"
      borderWidth="1px"
      p="3"
      transition="background-color 160ms ease, border-color 160ms ease, transform 160ms ease"
      _hover={{
        bg: 'rgba(34, 211, 238, 0.1)',
        borderColor: 'rgba(103, 232, 249, 0.34)',
        transform: 'translateY(-1px)',
      }}
    >
      <Text as="dt" color="#9aa7b1" fontSize="sm">
        {label}
      </Text>
      <Text as="dd" fontWeight="bold" mt="1">
        {value}
      </Text>
    </Box>
  );
}
