import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

interface ChakraAppProviderProps {
  readonly children: React.ReactNode;
}

export function ChakraAppProvider({ children }: ChakraAppProviderProps) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
