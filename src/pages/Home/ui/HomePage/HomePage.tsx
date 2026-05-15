import { Box, Stack } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { useViewModel } from 'src/shared/lib';
import { HomeViewModel } from '../../model/HomeViewModel';
import { HomeCapabilityGrid } from '../HomeCapabilityGrid/HomeCapabilityGrid';
import { HomeDemoPaths } from '../HomeDemoPaths/HomeDemoPaths';
import { HomeHero } from '../HomeHero/HomeHero';
import { HomeProofStrip } from '../HomeProofStrip/HomeProofStrip';
import { HomeSourceLinks } from '../HomeSourceLinks/HomeSourceLinks';

export const HomePage = observer(() => {
  const vm = useViewModel(HomeViewModel);

  return (
    <Box as="main" color="gray.900" overflowX="clip" px={{ base: '4', md: '6', lg: '8' }} py="8">
      <Stack gap={{ base: '10', lg: '12' }} maxW="1440px" mx="auto" w="full">
        <HomeHero />
        <HomeProofStrip />
        <HomeCapabilityGrid capabilities={vm.capabilities} />
        <HomeDemoPaths paths={vm.demoPaths} />
        <HomeSourceLinks links={vm.sourceLinks} />
      </Stack>
    </Box>
  );
});
