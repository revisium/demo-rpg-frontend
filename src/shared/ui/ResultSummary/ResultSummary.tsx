import { Text } from '@chakra-ui/react';

interface ResultSummaryProps {
  readonly entityLabel: string;
  readonly totalCount: number;
  readonly visibleCount: number;
}

export function ResultSummary({ entityLabel, totalCount, visibleCount }: ResultSummaryProps) {
  return (
    <Text color="gray.600">
      Showing <Text as="strong">{visibleCount}</Text> of <Text as="strong">{totalCount}</Text>{' '}
      {entityLabel}
    </Text>
  );
}
