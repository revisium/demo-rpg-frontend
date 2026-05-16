import { Box, Flex, Text } from '@chakra-ui/react';

import type { HomeProofItemViewModel } from '../../model/HomeProofItemViewModel';

interface HomeProofStripItemProps {
  readonly item: HomeProofItemViewModel;
}

export function HomeProofStripItem({ item }: HomeProofStripItemProps) {
  return (
    <Flex
      align="center"
      borderLeftColor="rgba(103, 232, 249, 0.14)"
      borderLeftWidth={{ base: '0', md: item.showDesktopDivider ? '1px' : '0' }}
      borderTopColor="rgba(103, 232, 249, 0.14)"
      borderTopWidth={{ base: item.showMobileDivider ? '1px' : '0', md: '0' }}
      gap="3"
      minH="96px"
      p="5"
    >
      <Box
        alignItems="center"
        bg={item.bg}
        borderColor={item.border}
        borderRadius="md"
        borderWidth="1px"
        color={item.color}
        display="flex"
        flex="0 0 auto"
        fontWeight="bold"
        h="10"
        justifyContent="center"
        w="10"
      >
        {item.sequenceLabel}
      </Box>
      <Box minW="0">
        <Text color="#9aa7b1" fontSize="sm">
          {item.label}
        </Text>
        <Text fontWeight="bold">{item.value}</Text>
      </Box>
    </Flex>
  );
}
