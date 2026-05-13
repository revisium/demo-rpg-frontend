import { Box, Button, Heading, Text } from '@chakra-ui/react';

interface ClassesStatePanelProps {
  readonly actionLabel?: string;
  readonly onAction?: () => void;
  readonly tone?: 'error' | 'neutral';
  readonly title: string;
  readonly description: string;
}

export function ClassesStatePanel({
  actionLabel,
  description,
  onAction,
  title,
  tone = 'neutral',
}: ClassesStatePanelProps) {
  const isError = tone === 'error';

  return (
    <Box
      aria-live={isError ? 'polite' : undefined}
      bg="white"
      borderColor={isError ? 'red.300' : 'gray.200'}
      borderRadius="md"
      borderWidth="1px"
      p="6"
    >
      <Heading as="h2" fontSize="xl">
        {title}
      </Heading>
      <Text color="gray.600" mt="2">
        {description}
      </Text>
      {actionLabel && onAction ? (
        <Button colorPalette="green" minH="44px" mt="4" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </Box>
  );
}
