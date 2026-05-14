import { Box, Button, Text } from '@chakra-ui/react';

interface CodePanelProps {
  readonly children: string;
  readonly isOpen?: boolean;
  readonly label: string;
  readonly meta?: string;
  readonly onToggle?: () => void;
  readonly panelId?: string;
}

export function CodePanel({
  children,
  isOpen = true,
  label,
  meta,
  onToggle,
  panelId,
}: CodePanelProps) {
  const isCollapsible = Boolean(onToggle);
  const content = (
    <Box
      as="pre"
      fontFamily="mono"
      fontSize="xs"
      id={panelId}
      lineHeight="1.45"
      maxH="260px"
      overflow="auto"
      overflowWrap="anywhere"
      p="3"
      whiteSpace="pre-wrap"
    >
      {children}
    </Box>
  );

  return (
    <Box bg="gray.100" borderColor="gray.200" borderRadius="md" borderWidth="1px" minW="0" overflow="hidden">
      {isCollapsible ? (
        <Button
          aria-controls={panelId}
          aria-expanded={isOpen}
          borderBottomColor={isOpen ? 'gray.200' : 'transparent'}
          borderBottomRadius="0"
          borderBottomWidth={isOpen ? '1px' : '0'}
          color="gray.700"
          display="flex"
          fontSize="xs"
          fontWeight="normal"
          h="auto"
          justifyContent="space-between"
          minH="44px"
          onClick={onToggle}
          px="3"
          py="2"
          type="button"
          variant="plain"
          w="full"
        >
          <Box alignItems="center" display="flex" gap="3" minW="0">
            <Text>{label}</Text>
            {meta ? (
              <Text as="strong" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                {meta}
              </Text>
            ) : null}
          </Box>
          <Text as="span" color="gray.600" flexShrink="0">
            {isOpen ? 'Hide' : 'Show'}
          </Text>
        </Button>
      ) : (
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
      )}
      {isOpen ? content : null}
    </Box>
  );
}
