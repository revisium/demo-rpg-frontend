import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import type { HomeDemoPath } from '../../model/HomeViewModel';

interface HomeDemoPathsProps {
  readonly paths: readonly HomeDemoPath[];
}

export function HomeDemoPaths({ paths }: HomeDemoPathsProps) {
  return (
    <Box as="section" aria-labelledby="home-demo-paths-title">
      <Flex align="flex-start" gap="4" justify="space-between" wrap="wrap">
        <Box>
          <Heading as="h2" fontSize="2xl" id="home-demo-paths-title">
            Demo paths
          </Heading>
          <Text color="gray.600" lineHeight="1.6" maxW="720px" mt="2">
            Use these routes as a short evaluation path through the current product surface.
          </Text>
        </Box>
        <Button asChild colorPalette="green" variant="solid">
          <RouterLink to="/regions">Start with regions</RouterLink>
        </Button>
      </Flex>

      <SimpleGrid as="ol" columns={{ base: 1, md: 2, xl: 4 }} gap="4" listStyleType="none" mt="6" p="0">
        {paths.map((path, index) => (
          <Box
            as="li"
            bg="white"
            borderColor="gray.200"
            borderRadius="md"
            borderWidth="1px"
            key={path.title}
            p="5"
          >
            <Text color="green.700" fontSize="sm" fontWeight="bold">
              Step {index + 1}
            </Text>
            <Heading as="h3" fontSize="lg" lineHeight="1.25" mt="2">
              {path.title}
            </Heading>
            <Text color="gray.600" lineHeight="1.55" mt="2">
              {path.description}
            </Text>
            <Button asChild colorPalette="green" mt="4" size="sm" variant="ghost">
              <RouterLink to={path.href}>Open</RouterLink>
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
