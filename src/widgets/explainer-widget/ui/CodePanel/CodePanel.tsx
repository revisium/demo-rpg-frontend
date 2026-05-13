import { Box, Text } from '@chakra-ui/react';

interface CodePanelProps {
  readonly children: string;
  readonly label: string;
  readonly meta?: string;
}

export function CodePanel({ children, label, meta }: CodePanelProps) {
  return (
    <Box bg="gray.100" borderColor="gray.200" borderRadius="md" borderWidth="1px" minW="0" overflow="hidden">
      <Box
        alignItems="center"
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        color="gray.600"
        display="flex"
        fontSize="xs"
        gap="3"
        justifyContent="space-between"
        px="3"
        py="2"
      >
        <Text>{label}</Text>
        {meta ? <Text as="strong">{meta}</Text> : null}
      </Box>
      <Box
        as="pre"
        fontFamily="mono"
        fontSize="xs"
        lineHeight="1.45"
        maxH="260px"
        overflow="auto"
        overflowWrap="anywhere"
        p="3"
        whiteSpace="pre-wrap"
      >
        {children}
      </Box>
    </Box>
  );
}
