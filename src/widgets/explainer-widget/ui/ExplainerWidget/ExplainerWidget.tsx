import { Box, Heading, Text } from '@chakra-ui/react';

import type { ExplainerDescriptor } from '../../model/types';
import { ExplainerContent } from '../ExplainerContent/ExplainerContent';

interface ExplainerWidgetProps {
  readonly descriptor: ExplainerDescriptor;
  readonly headingId: string;
  readonly isLoading?: boolean;
}

export function ExplainerWidget({ descriptor, headingId, isLoading = false }: ExplainerWidgetProps) {
  const mobileHeadingId = `${headingId}-mobile`;

  return (
    <>
      <Box
        as="details"
        bg="white"
        borderColor="gray.200"
        borderRadius="md"
        borderWidth="1px"
        display={{ base: 'grid', md: 'none' }}
        gap="4"
        minW="0"
        p="5"
      >
        <Box as="summary" cursor="pointer" listStyleType="none">
          <Text color="blue.700" fontSize="sm" fontWeight="bold" mb="2">
            How this uses Revisium
          </Text>
          <Heading as="h2" fontSize="xl" id={mobileHeadingId}>
            Explainer Widget
          </Heading>
        </Box>
        <ExplainerContent descriptor={descriptor} isLoading={isLoading} />
      </Box>

      <Box
        as="section"
        aria-labelledby={headingId}
        bg="white"
        borderColor="gray.200"
        borderRadius="md"
        borderWidth="1px"
        display={{ base: 'none', md: 'grid' }}
        gap="4"
        minW="0"
        p="5"
        position={{ md: 'static', lg: 'sticky' }}
        top="6"
      >
        <Text color="blue.700" fontSize="sm" fontWeight="bold" mb="2">
          How this uses Revisium
        </Text>
        <Heading as="h2" fontSize="xl" id={headingId}>
          Explainer Widget
        </Heading>
        <ExplainerContent descriptor={descriptor} isLoading={isLoading} />
      </Box>
    </>
  );
}
