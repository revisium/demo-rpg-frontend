import { Box, Button, Grid } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { useViewModel } from 'src/shared/lib';
import { ExplainerWidget } from 'src/widgets/explainer-widget';
import { RegionsViewModel } from '../../model/RegionsViewModel';
import { RegionList } from '../RegionList/RegionList';
import { RegionsHeader } from '../RegionsHeader/RegionsHeader';
import { RegionsSkeleton } from '../RegionsSkeleton/RegionsSkeleton';
import { RegionsStatePanel } from '../RegionsStatePanel/RegionsStatePanel';
import { RegionsToolbar } from '../RegionsToolbar/RegionsToolbar';

export const RegionsPage = observer(() => {
  const vm = useViewModel(RegionsViewModel);

  return (
    <Box as="main" color="gray.900" overflowX="clip" px={{ base: '4', md: '6', lg: '8' }} py="8">
      <Box maxW="1440px" mx="auto" w="full">
        <RegionsHeader />

        <Grid
          alignItems="start"
          gap="8"
          templateColumns={{ base: 'minmax(0, 1fr)', lg: 'minmax(0, 1fr) minmax(320px, 420px)' }}
        >
          <Box minW="0">
            <RegionsToolbar vm={vm} />

            {vm.showLoading ? <RegionsSkeleton /> : null}

            {vm.showError ? (
              <RegionsStatePanel
                actionLabel="Retry"
                description="The GraphQL router did not return the regions catalog."
                onAction={() => void vm.retry()}
                title="Failed to load regions"
                tone="error"
              />
            ) : null}

            {vm.showEmpty ? (
              <RegionsStatePanel
                actionLabel={vm.hasActiveFilter ? 'Reset filter' : undefined}
                description="The query completed, but no loaded regions match the current filter."
                onAction={vm.hasActiveFilter ? () => vm.resetFilters() : undefined}
                title="No regions found"
              />
            ) : null}

            {vm.showList ? <RegionList vm={vm} /> : null}

            {vm.hasNextPage ? (
              <Box display="flex" justifyContent="center" mt="6">
                <Button
                  colorPalette="green"
                  disabled={!vm.canLoadMore}
                  onClick={() => void vm.loadMore()}
                >
                  {vm.showRefreshing ? 'Loading...' : 'Load more'}
                </Button>
              </Box>
            ) : null}
          </Box>

          <ExplainerWidget descriptor={vm.explainer} headingId="regions-explainer-title" />
        </Grid>
      </Box>
    </Box>
  );
});
