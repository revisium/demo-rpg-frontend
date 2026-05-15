import { Badge, Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import type { HomeViewModel } from '../../model/HomeViewModel';

interface HomeHeroProps {
  readonly vm: HomeViewModel;
}

export function HomeHero({ vm }: HomeHeroProps) {
  const { hero } = vm;

  return (
    <Box as="section" aria-labelledby="home-title" pb={{ base: '8', lg: '10' }} pt={{ base: '2', lg: '4' }}>
      <Stack align="flex-start" gap="6" maxW="960px">
        <Flex aria-label="Current proof surfaces" gap="2" wrap="wrap">
          {hero.badges.map((badge) => (
            <Badge colorPalette={badge.palette} key={badge.label} size="lg" variant="subtle">
              {badge.label}
            </Badge>
          ))}
        </Flex>

        <Box>
          <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} id="home-title" lineHeight="1.02">
            {hero.title}
          </Heading>
          <Text color="gray.700" fontSize={{ base: 'lg', md: 'xl' }} lineHeight="1.6" maxW="820px" mt="5">
            {hero.subtitle}
          </Text>
        </Box>

        <Flex gap="3" wrap="wrap">
          <Button asChild colorPalette="green" size="lg">
            <RouterLink to={hero.primaryCta.href}>{hero.primaryCta.label}</RouterLink>
          </Button>
          <Button asChild size="lg" variant="outline">
            <RouterLink to={hero.secondaryCta.href}>{hero.secondaryCta.label}</RouterLink>
          </Button>
        </Flex>

        <Text color="gray.600" fontSize="sm" lineHeight="1.6" maxW="720px">
          {hero.fallbackNote}{' '}
          <Link asChild color="green.800" fontWeight="medium">
            <RouterLink to={hero.fallbackLink.href}>{hero.fallbackLink.label}</RouterLink>
          </Link>
        </Text>
      </Stack>
    </Box>
  );
}
