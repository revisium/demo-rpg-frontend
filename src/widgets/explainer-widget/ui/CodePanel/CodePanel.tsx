import { Box, Button, Text } from '@chakra-ui/react';

interface CodePanelBaseProps {
  readonly children: string;
  readonly label: string;
  readonly meta?: string;
}

interface CollapsibleCodePanelProps extends CodePanelBaseProps {
  readonly collapsible: true;
  readonly isOpen: boolean;
  readonly onToggle: () => void;
  readonly panelId: string;
}

interface StaticCodePanelProps extends CodePanelBaseProps {
  readonly collapsible?: false;
}

type CodePanelProps = CollapsibleCodePanelProps | StaticCodePanelProps;

interface CodePanelHeaderProps {
  readonly label: string;
  readonly meta?: string;
}

export function CodePanel(props: CodePanelProps) {
  const { children, label, meta } = props;
  const isOpen = props.collapsible ? props.isOpen : true;
  const panelId = props.collapsible ? props.panelId : undefined;
  const content = (
    <Box
      as="pre"
      fontFamily="mono"
      fontSize="xs"
      id={panelId}
      lineHeight="1.45"
      maxH="260px"
      overflow="auto"
      overflowWrap="anywhere"
      p="3"
      whiteSpace="pre-wrap"
    >
      {children}
    </Box>
  );

  return (
    <Box bg="gray.100" borderColor="gray.200" borderRadius="md" borderWidth="1px" minW="0" overflow="hidden">
      {props.collapsible ? (
        <Button
          aria-controls={panelId}
          aria-expanded={isOpen}
          borderBottomColor={isOpen ? 'gray.200' : 'transparent'}
          borderBottomRadius="0"
          borderBottomWidth={isOpen ? '1px' : '0'}
          color="gray.700"
          display="flex"
          fontSize="xs"
          fontWeight="normal"
          h="auto"
          justifyContent="space-between"
          minH="44px"
          onClick={props.onToggle}
          px="3"
          py="2"
          type="button"
          variant="plain"
          w="full"
        >
          <CodePanelHeader label={label} meta={meta} />
          <Text as="span" color="gray.600" flexShrink="0">
            {isOpen ? 'Hide' : 'Show'}
          </Text>
        </Button>
      ) : (
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
          <CodePanelHeader label={label} meta={meta} />
        </Box>
      )}
      {isOpen ? content : null}
    </Box>
  );
}

function CodePanelHeader({ label, meta }: CodePanelHeaderProps) {
  return (
    <Box alignItems="center" display="flex" gap="3" minW="0">
      <Text>{label}</Text>
      {meta ? (
        <Text as="strong" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
          {meta}
        </Text>
      ) : null}
    </Box>
  );
}
