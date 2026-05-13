import { Badge, Box, Link, Skeleton, Stack, Text } from '@chakra-ui/react';

import type { ExplainerDescriptor, ExplainerSubgraph } from '../../model/types';
import { CodePanel } from '../CodePanel/CodePanel';

interface ExplainerContentProps {
  readonly descriptor: ExplainerDescriptor;
  readonly isLoading?: boolean;
}

export function ExplainerContent({ descriptor, isLoading = false }: ExplainerContentProps) {
  return (
    <>
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
      {descriptor.surfaces.rest ? (
        <CodePanel label="REST" meta={`${descriptor.surfaces.rest.method} ${descriptor.surfaces.rest.path}`}>
          {descriptor.surfaces.rest.request ?? descriptor.surfaces.rest.path}
        </CodePanel>
      ) : null}
      {descriptor.surfaces.mcp ? (
        <CodePanel label="MCP" meta={descriptor.surfaces.mcp.toolName}>
          {descriptor.surfaces.mcp.request}
        </CodePanel>
      ) : null}
      <CodePanel label="Variables">{JSON.stringify(descriptor.variables, null, 2)}</CodePanel>
      {isLoading ? (
        <Box
          aria-label="Loading explainer response"
          bg="gray.100"
          borderColor="gray.200"
          borderRadius="md"
          borderWidth="1px"
          minW="0"
          p="3"
        >
          <Skeleton h="4" mb="3" w="120px" />
          <Skeleton h="4" mb="2" />
          <Skeleton h="4" mb="2" />
          <Skeleton h="4" w="70%" />
        </Box>
      ) : (
        <CodePanel label="Response sample">
          {JSON.stringify(descriptor.responseSample, null, 2)}
        </CodePanel>
      )}

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

      {descriptor.fieldAttribution && descriptor.fieldAttribution.length > 0 ? (
        <Box bg="blue.50" borderColor="blue.200" borderRadius="md" borderWidth="1px" p="3">
          <Text color="blue.900" fontSize="sm" fontWeight="bold">
            Field attribution
          </Text>
          <Stack as="ul" gap="1" listStyleType="none" mt="2" p="0">
            {descriptor.fieldAttribution.map((field) => (
              <Text as="li" color="blue.900" fontSize="sm" key={field.path}>
                {field.path}: {field.owningSubgraph}
              </Text>
            ))}
          </Stack>
        </Box>
      ) : null}

      {descriptor.federation ? (
        <Box bg="purple.50" borderColor="purple.200" borderRadius="md" borderWidth="1px" p="3">
          <Text color="purple.900" fontSize="sm" fontWeight="bold">
            Federation
          </Text>
          <Text color="purple.900" fontSize="sm" mt="1">
            {descriptor.federation.summary}
          </Text>
          <CodePanel label="SDL excerpt">{descriptor.federation.sdlExcerpt}</CodePanel>
        </Box>
      ) : null}

      <Stack align="flex-start" gap="2">
        <Link color="green.800" href={descriptor.deepLinks.cloudTable} rel="noreferrer" target="_blank">
          Cloud table
        </Link>
        <Link color="green.800" href={descriptor.deepLinks.cloudSchema} rel="noreferrer" target="_blank">
          Cloud schema
        </Link>
        {descriptor.deepLinks.cloudRow ? (
          <Link color="green.800" href={descriptor.deepLinks.cloudRow} rel="noreferrer" target="_blank">
            Cloud row
          </Link>
        ) : null}
        {descriptor.deepLinks.openApi ? (
          <Link color="green.800" href={descriptor.deepLinks.openApi} rel="noreferrer" target="_blank">
            OpenAPI
          </Link>
        ) : null}
        {descriptor.deepLinks.mcpTool ? (
          <Link color="green.800" href={descriptor.deepLinks.mcpTool} rel="noreferrer" target="_blank">
            MCP tool
          </Link>
        ) : null}
        {descriptor.deepLinks.federationSdlSource ? (
          <Link color="green.800" href={descriptor.deepLinks.federationSdlSource} rel="noreferrer" target="_blank">
            Federation SDL
          </Link>
        ) : null}
      </Stack>

      <Text borderTopColor="gray.200" borderTopWidth="1px" color="gray.600" fontSize="sm" pt="3">
        {descriptor.footerNote}
      </Text>
    </>
  );
}

function subgraphColorPalette(subgraph: ExplainerSubgraph): string {
  if (subgraph === 'cms') return 'orange';
  if (subgraph === 'backend') return 'purple';
  return 'blue';
}
