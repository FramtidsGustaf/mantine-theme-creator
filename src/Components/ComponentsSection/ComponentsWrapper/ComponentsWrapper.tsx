import { Box, Center, Fieldset, Group, Stack } from "@mantine/core";

interface ComponentsWrapperProps {
  label: string;
  component: React.ReactNode;
  settings: React.ReactNode;
  isDirty: boolean;
}

export const ComponentsWrapper = ({
  label,
  component,
  settings,
  isDirty,
}: ComponentsWrapperProps) => {
  return (
    <Fieldset legend={label + (isDirty ? " *" : "")}>
      <Group justify="space-between" h="100%" align="center">
        <Center w="60%">{component}</Center>
        <Box w={220}>
          <Stack gap={0}>{settings}</Stack>
        </Box>
      </Group>
    </Fieldset>
  );
};
