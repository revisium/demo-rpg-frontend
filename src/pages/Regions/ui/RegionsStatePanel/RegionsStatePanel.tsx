import { Box, Button, Heading, Text } from '@chakra-ui/react';

interface RegionsStatePanelProps {
  readonly actionLabel?: string;
  readonly onAction?: () => void;
  readonly tone?: 'error' | 'neutral';
  readonly title: string;
  readonly description: string;
}

export function RegionsStatePanel({
  actionLabel,
  description,
  onAction,
  title,
  tone = 'neutral',
}: RegionsStatePanelProps) {
  const isError = tone === 'error';

  return (
    <Box
      bg="white"
      borderColor={isError ? 'red.300' : 'gray.200'}
      borderRadius="md"
      borderWidth="1px"
      p="6"
      role={isError ? 'alert' : undefined}
    >
      <Heading as="h2" fontSize="xl">
        {title}
      </Heading>
      <Text color="gray.600" mt="2">
        {description}
      </Text>
      {actionLabel && onAction ? (
        <Button colorPalette="green" mt="4" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </Box>
  );
}
