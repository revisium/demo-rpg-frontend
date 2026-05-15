import { Badge, Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

export function HomeHero() {
  return (
    <Box as="section" aria-labelledby="home-title" pb={{ base: '8', lg: '10' }} pt={{ base: '2', lg: '4' }}>
      <Stack align="flex-start" gap="6" maxW="960px">
        <Flex aria-label="Current proof surfaces" gap="2" wrap="wrap">
          <Badge colorPalette="blue" size="lg" variant="subtle">
            data
          </Badge>
          <Badge colorPalette="purple" size="lg" variant="subtle">
            cms ready
          </Badge>
          <Badge colorPalette="green" size="lg" variant="subtle">
            GraphQL
          </Badge>
        </Flex>

        <Box>
          <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} id="home-title" lineHeight="1.02">
            Branching Tales
          </Heading>
          <Text color="gray.700" fontSize={{ base: 'lg', md: 'xl' }} lineHeight="1.6" maxW="820px" mt="5">
            A focused Revisium evaluation demo: prove schema-first content, generated
            GraphQL contracts, branching data, and federation without turning the frontend
            into a glue-code layer.
          </Text>
        </Box>

        <Flex gap="3" wrap="wrap">
          <Button asChild colorPalette="green" size="lg">
            <RouterLink to="/regions">Browse regions</RouterLink>
          </Button>
          <Button asChild size="lg" variant="outline">
            <RouterLink to="/about">How this works</RouterLink>
          </Button>
        </Flex>

        <Text color="gray.600" fontSize="sm" lineHeight="1.6" maxW="720px">
          CMS-backed landing copy is not connected yet, so this page renders committed
          fallback copy and keeps navigation available.{' '}
          <Link asChild color="green.800" fontWeight="medium">
            <RouterLink to="/regions">Start with the live catalog.</RouterLink>
          </Link>
        </Text>
      </Stack>
    </Box>
  );
}
