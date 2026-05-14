import { Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { LocaleSwitch, ResultSummary } from 'src/shared/ui';
import type { ClassesViewModel } from '../../model/ClassesViewModel';

interface ClassesToolbarProps {
  readonly vm: ClassesViewModel;
}

export const ClassesToolbar = observer(({ vm }: ClassesToolbarProps) => {
  return (
    <Flex align="flex-start" gap="4" justify="space-between" mb="5" wrap={{ base: 'wrap', sm: 'nowrap' }}>
      <ResultSummary entityLabel="classes" totalCount={vm.totalCount} visibleCount={vm.visibleCount} />
      <LocaleSwitch onChange={(locale) => vm.setLocale(locale)} value={vm.locale} />
    </Flex>
  );
});
