import { Badge, Box, Button, Container, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router';

interface AppLayoutProps {
  readonly children: React.ReactNode;
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Data', to: '/regions' },
  { label: 'Search', to: '/search' },
  { label: 'Branching', to: '/balance-patch' },
  { label: 'About', to: '/about' },
  { label: 'News', to: '/news' },
] as const;

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();

  return (
    <Box bg="gray.50" color="gray.900" minH="100dvh" overflowX="clip">
      <Link
        _focusVisible={{ outlineColor: 'green.700', outlineOffset: '3px', outlineWidth: '2px' }}
        bg="white"
        color="green.800"
        href="#app-content"
        left="4"
        p="2"
        position="absolute"
        top="-100px"
        zIndex="skipNav"
        _focus={{ top: '4' }}
      >
        Skip to content
      </Link>

      <Box as="header" bg="white" borderBottomColor="gray.200" borderBottomWidth="1px">
        <Container maxW="1440px" px={{ base: '4', md: '6', lg: '8' }} py="4">
          <Flex align="center" gap="4" justify="space-between" wrap="wrap">
            <Link
              asChild
              color="gray.950"
              fontSize="lg"
              fontWeight="bold"
              letterSpacing="0"
              _hover={{ textDecoration: 'none' }}
            >
              <RouterLink to="/">Branching Tales</RouterLink>
            </Link>

            <HStack as="nav" gap="2" aria-label="Primary navigation" wrap="wrap">
              {navItems.map((item) => {
                const isActive =
                  item.to === '/'
                    ? location.pathname === '/'
                    : location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);

                return (
                  <Button
                    asChild
                    colorPalette={isActive ? 'green' : 'gray'}
                    key={item.to}
                    size="sm"
                    variant={isActive ? 'solid' : 'ghost'}
                  >
                    <RouterLink to={item.to}>{item.label}</RouterLink>
                  </Button>
                );
              })}
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box id="app-content">{children}</Box>

      <Box as="footer" bg="white" borderTopColor="gray.200" borderTopWidth="1px">
        <Container maxW="1440px" px={{ base: '4', md: '6', lg: '8' }} py="4">
          <Flex align="center" gap="3" justify="space-between" wrap="wrap">
            <Badge colorPalette="purple" variant="subtle">
              React Router SSR + Revisium GraphQL
            </Badge>
            <Text color="gray.600" fontSize="sm">
              data + cms + backend subgraphs.{' '}
              <Link asChild color="green.800" fontWeight="medium">
                <RouterLink to="/about">Architecture</RouterLink>
              </Link>
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
