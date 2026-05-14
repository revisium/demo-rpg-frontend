import {
  ChakraProvider,
  createSystem,
  defaultConfig,
} from '@chakra-ui/react';

interface ChakraAppProviderProps {
  readonly children: React.ReactNode;
}

const appSystem = createSystem(defaultConfig);

export function ChakraAppProvider({ children }: ChakraAppProviderProps) {
  return <ChakraProvider value={appSystem}>{children}</ChakraProvider>;
}
