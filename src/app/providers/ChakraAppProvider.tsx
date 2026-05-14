import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';

interface ChakraAppProviderProps {
  readonly children: React.ReactNode;
}

const appSystem = createSystem(
  defaultConfig,
  defineConfig({
    globalCss: {
      'html, body': {
        scrollbarWidth: 'none',
      },
      'html::-webkit-scrollbar, body::-webkit-scrollbar': {
        display: 'none',
      },
    },
  }),
);

export function ChakraAppProvider({ children }: ChakraAppProviderProps) {
  return <ChakraProvider value={appSystem}>{children}</ChakraProvider>;
}
