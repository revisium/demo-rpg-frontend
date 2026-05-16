import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Link as RouterLink } from 'react-router';

import type { HomeViewModel } from '../../model/HomeViewModel';
import { HomeDemoPathCard } from '../HomeDemoPathCard/HomeDemoPathCard';

interface HomeDemoPathsProps {
  readonly vm: HomeViewModel;
}

export const HomeDemoPaths = observer(({ vm }: HomeDemoPathsProps) => {
  const { demoPathsCta, demoPathsSection } = vm;

  return (
    <Box as="section" aria-labelledby="home-demo-paths-title">
      <Flex align="flex-start" gap="4" justify="space-between" wrap="wrap">
        <Box>
          <Heading as="h2" fontSize="2xl" id="home-demo-paths-title">
            {demoPathsSection.title}
          </Heading>
          <Text color="#9aa7b1" lineHeight="1.6" maxW="720px" mt="2">
            {demoPathsSection.description}
          </Text>
        </Box>
        <Button asChild bg="#22d3ee" color="#071018" variant="solid" _hover={{ bg: '#67e8f9' }}>
          <RouterLink to={demoPathsCta.href}>{demoPathsCta.label}</RouterLink>
        </Button>
      </Flex>

      <SimpleGrid
        as="ol"
        columns={{ base: 1, md: 2, xl: 4 }}
        gap="4"
        listStyleType="none"
        mt="6"
        p="0"
      >
        {vm.demoPaths.map((item) => (
          <HomeDemoPathCard item={item} key={item.key} />
        ))}
      </SimpleGrid>
    </Box>
  );
});
