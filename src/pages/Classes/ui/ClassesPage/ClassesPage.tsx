import { Box, Grid } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { useViewModel } from 'src/shared/lib';
import { StatePanel } from 'src/shared/ui';
import { ExplainerWidget } from 'src/widgets/explainer-widget';
import { ClassesViewModel } from '../../model/ClassesViewModel';
import { ClassList } from '../ClassList/ClassList';
import { ClassesHeader } from '../ClassesHeader/ClassesHeader';
import { ClassesSkeleton } from '../ClassesSkeleton/ClassesSkeleton';
import { ClassesToolbar } from '../ClassesToolbar/ClassesToolbar';

export const ClassesPage = observer(() => {
  const vm = useViewModel(ClassesViewModel);

  return (
    <Box as="main" color="gray.900" overflowX="clip" px={{ base: '4', md: '6', lg: '8' }} py="8">
      <Box maxW="1440px" mx="auto" w="full">
        <ClassesHeader />

        <Grid
          alignItems="start"
          gap="8"
          templateColumns={{
            base: 'minmax(0, 1fr)',
            md: 'minmax(0, 1fr) minmax(280px, 360px)',
            lg: 'minmax(0, 1fr) minmax(320px, 420px)',
          }}
        >
          <Box minW="0" order={{ base: 1, md: 0 }}>
            <ClassesToolbar vm={vm} />

            {vm.showLoading ? <ClassesSkeleton /> : null}

            {vm.showError ? (
              <StatePanel
                actionLabel="Retry"
                description="The GraphQL router did not return the classes catalog."
                onAction={() => void vm.retry()}
                title="Failed to load classes"
                tone="error"
              />
            ) : null}

            {vm.showEmpty ? (
              <StatePanel
                description="The query completed, but the classes table returned no rows."
                title="No classes found"
              />
            ) : null}

            {vm.showList ? <ClassList vm={vm} /> : null}
          </Box>

          <Box minW="0" order={{ base: 0, md: 1 }}>
            <ExplainerWidget
              descriptor={vm.explainer}
              headingId="classes-explainer-title"
              isLoading={vm.showLoading}
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
});
