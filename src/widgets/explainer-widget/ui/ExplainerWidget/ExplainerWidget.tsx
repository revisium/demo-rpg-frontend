import { Badge, Box, Heading, Link, Stack, Text } from '@chakra-ui/react';

import type { ExplainerDescriptor, ExplainerSubgraph } from '../../model/types';

interface ExplainerWidgetProps {
  readonly descriptor: ExplainerDescriptor;
  readonly headingId: string;
}

export function ExplainerWidget({ descriptor, headingId }: ExplainerWidgetProps) {
  return (
    <Box
      as="section"
      aria-labelledby={headingId}
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      borderWidth="1px"
      display="grid"
      gap="4"
      minW="0"
      p="5"
      position={{ base: 'static', lg: 'sticky' }}
      top="6"
    >
      <Box>
        <Text color="blue.700" fontSize="sm" fontWeight="bold" mb="2">
          How this uses Revisium
        </Text>
        <Heading as="h2" fontSize="xl" id={headingId}>
          Explainer Widget
        </Heading>
      </Box>

      <Stack align="flex-start" direction="row" gap="2" wrap="wrap">
        {descriptor.subgraphsInUse.map((subgraph) => (
          <Badge colorPalette={subgraphColorPalette(subgraph)} key={subgraph} variant="subtle">
            {subgraph}
          </Badge>
        ))}
      </Stack>

      <Text color="gray.600" lineHeight="1.5">
        {descriptor.summary}
      </Text>

      <CodePanel label="GraphQL" meta={descriptor.surfaces.graphql.operationName}>
        {descriptor.surfaces.graphql.request}
      </CodePanel>
      <CodePanel label="Variables">{JSON.stringify(descriptor.variables, null, 2)}</CodePanel>
      <CodePanel label="Response sample">
        {JSON.stringify(descriptor.responseSample, null, 2)}
      </CodePanel>

      {descriptor.localeFallbacks && descriptor.localeFallbacks.length > 0 ? (
        <Box bg="orange.50" borderColor="orange.200" borderRadius="md" borderWidth="1px" p="3">
          <Text color="orange.900" fontSize="sm" fontWeight="bold">
            Locale fallbacks
          </Text>
          <Stack as="ul" gap="1" listStyleType="none" mt="2" p="0">
            {descriptor.localeFallbacks.map((fallback) => (
              <Text as="li" color="orange.900" fontSize="sm" key={fallback.path}>
                {fallback.path}: {fallback.requestedLocale} rendered as {fallback.renderedLocale}
              </Text>
            ))}
          </Stack>
        </Box>
      ) : null}

      <Stack align="flex-start" gap="2">
        <Link color="green.800" href={descriptor.deepLinks.cloudTable} rel="noreferrer" target="_blank">
          Cloud table
        </Link>
        <Link color="green.800" href={descriptor.deepLinks.cloudSchema} rel="noreferrer" target="_blank">
          Cloud schema
        </Link>
      </Stack>

      <Text borderTopColor="gray.200" borderTopWidth="1px" color="gray.600" fontSize="sm" pt="3">
        {descriptor.footerNote}
      </Text>
    </Box>
  );
}

interface CodePanelProps {
  readonly children: string;
  readonly label: string;
  readonly meta?: string;
}

function CodePanel({ children, label, meta }: CodePanelProps) {
  return (
    <Box bg="gray.100" borderColor="gray.200" borderRadius="md" borderWidth="1px" minW="0" overflow="hidden">
      <Box
        alignItems="center"
        borderBottomColor="gray.200"
        borderBottomWidth="1px"
        color="gray.600"
        display="flex"
        fontSize="xs"
        gap="3"
        justifyContent="space-between"
        px="3"
        py="2"
      >
        <Text>{label}</Text>
        {meta ? <Text as="strong">{meta}</Text> : null}
      </Box>
      <Box
        as="pre"
        fontFamily="mono"
        fontSize="xs"
        lineHeight="1.45"
        maxH="260px"
        overflow="auto"
        overflowWrap="anywhere"
        p="3"
        whiteSpace="pre-wrap"
      >
        {children}
      </Box>
    </Box>
  );
}

function subgraphColorPalette(subgraph: ExplainerSubgraph): string {
  if (subgraph === 'cms') return 'orange';
  if (subgraph === 'backend') return 'purple';
  return 'blue';
}
