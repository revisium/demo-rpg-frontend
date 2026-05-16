import { Text } from '@chakra-ui/react';

interface ResultSummaryProps {
  readonly entityLabel: string;
  readonly totalCount: number;
  readonly visibleCount: number;
}

export function ResultSummary({ entityLabel, totalCount, visibleCount }: ResultSummaryProps) {
  return (
    <Text color="#9aa7b1">
      Showing <Text as="strong">{visibleCount}</Text> of <Text as="strong">{totalCount}</Text>{' '}
      {entityLabel}
    </Text>
  );
}
