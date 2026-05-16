import { Box, Button, Heading, Text } from '@chakra-ui/react';

interface StatePanelProps {
  readonly actionLabel?: string;
  readonly onAction?: () => void;
  readonly tone?: 'error' | 'neutral';
  readonly title: string;
  readonly description: string;
}

export function StatePanel({
  actionLabel,
  description,
  onAction,
  title,
  tone = 'neutral',
}: StatePanelProps) {
  const isError = tone === 'error';

  return (
    <Box
      aria-live={isError ? 'polite' : undefined}
      bg="rgba(18, 24, 32, 0.9)"
      borderColor={isError ? '#fb7185' : 'rgba(103, 232, 249, 0.16)'}
      borderRadius="md"
      borderWidth="1px"
      p="6"
    >
      <Heading as="h2" fontSize="xl">
        {title}
      </Heading>
      <Text color="#9aa7b1" mt="2">
        {description}
      </Text>
      {actionLabel && onAction ? (
        <Button
          bg="#22d3ee"
          color="var(--color-text-on-accent)"
          minH="44px"
          mt="4"
          onClick={onAction}
          _hover={{ bg: '#67e8f9' }}
        >
          {actionLabel}
        </Button>
      ) : null}
    </Box>
  );
}
