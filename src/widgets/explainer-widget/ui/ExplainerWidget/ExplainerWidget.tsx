import { Badge, Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { useViewModel } from 'src/shared/lib';
import { ExplainerWidgetViewModel } from '../../model/ExplainerWidgetViewModel';
import type { ExplainerDescriptor } from '../../model/types';
import { ExplainerContent } from '../ExplainerContent/ExplainerContent';

interface ExplainerWidgetProps {
  readonly descriptor: ExplainerDescriptor;
  readonly headingId: string;
  readonly isLoading?: boolean;
}

export const ExplainerWidget = observer(function ExplainerWidget({
  descriptor,
  headingId,
  isLoading = false,
}: ExplainerWidgetProps) {
  const vm = useViewModel(ExplainerWidgetViewModel);
  const mobileHeadingId = `${headingId}-mobile`;
  const mobilePanelId = `${headingId}-mobile-panel`;

  return (
    <>
      <Box
        as="section"
        aria-labelledby={mobileHeadingId}
        bg="#f4f8ff"
        borderColor="blue.300"
        borderRadius="md"
        borderLeftColor="blue.600"
        borderLeftWidth="4px"
        borderWidth="1px"
        display={{ base: 'grid', md: 'none' }}
        minW="0"
        overflow="hidden"
        shadow="0 12px 32px rgba(30, 64, 175, 0.14)"
      >
        <Button
          aria-controls={mobilePanelId}
          aria-expanded={vm.isMobileOpen}
          bg="blue.950"
          borderRadius="0"
          color="white"
          display="block"
          h="auto"
          minH="72px"
          onClick={() => vm.toggleMobileOpen()}
          px="5"
          py="4"
          textAlign="left"
          variant="plain"
          w="full"
        >
          <Stack align="flex-start" gap="2">
            <Flex align="center" gap="2" justify="space-between" w="full">
              <Badge bg="whiteAlpha.200" color="blue.50" variant="solid">
                Revisium reference
              </Badge>
              <Text color="blue.100" fontSize="xs">
                cloud.revisium.io
              </Text>
            </Flex>
            <Text color="blue.100" fontSize="sm" fontWeight="bold">
              How this uses Revisium
            </Text>
            <Heading as="h2" fontSize="xl" id={mobileHeadingId}>
              Explainer Widget
            </Heading>
          </Stack>
        </Button>
        <Box
          aria-labelledby={mobileHeadingId}
          display={vm.isMobileOpen ? 'grid' : 'none'}
          gap="4"
          id={mobilePanelId}
          p="5"
          role="region"
        >
          <ExplainerContent
            descriptor={descriptor}
            isLoading={isLoading}
            isSectionOpen={(section) => vm.isTechnicalSectionOpen(section)}
            onToggleSection={(section) => vm.toggleTechnicalSection(section)}
          />
        </Box>
      </Box>

      <Box
        as="section"
        aria-labelledby={headingId}
        bg="#f4f8ff"
        borderColor="blue.300"
        borderRadius="md"
        borderLeftColor="blue.600"
        borderLeftWidth="4px"
        borderWidth="1px"
        display={{ base: 'none', md: 'grid' }}
        minW="0"
        overflow="hidden"
        position={{ md: 'static', lg: 'sticky' }}
        shadow="0 12px 32px rgba(30, 64, 175, 0.14)"
        top="6"
      >
        <Box bg="blue.950" color="white" p="5">
          <Stack gap="2">
            <Flex align="center" gap="2" justify="space-between" wrap="wrap">
              <Badge bg="whiteAlpha.200" color="blue.50" variant="solid">
                Revisium reference
              </Badge>
              <Text color="blue.100" fontSize="xs">
                cloud.revisium.io
              </Text>
            </Flex>
            <Text color="blue.100" fontSize="sm" fontWeight="bold">
              How this uses Revisium
            </Text>
            <Heading as="h2" fontSize="xl" id={headingId}>
              Explainer Widget
            </Heading>
          </Stack>
        </Box>
        <Box display="grid" gap="4" p="5">
          <ExplainerContent
            descriptor={descriptor}
            isLoading={isLoading}
            isSectionOpen={(section) => vm.isTechnicalSectionOpen(section)}
            onToggleSection={(section) => vm.toggleTechnicalSection(section)}
          />
        </Box>
      </Box>
    </>
  );
});
