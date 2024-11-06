import {
  ActionIcon,
  Box,
  Center,
  Divider,
  Fieldset,
  Flex,
  Stack,
  Title,
  Tooltip,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconRestore } from "@tabler/icons-react";

interface ComponentsWrapperProps {
  label: string;
  component: React.ReactNode;
  settings: React.ReactNode;
  isDirty: boolean;
  onReset: () => void;
}

export const ComponentsWrapper = ({
  label,
  component,
  settings,
  isDirty,
  onReset,
}: ComponentsWrapperProps) => {
  const handleReset = () => {
    modals.openConfirmModal({
      centered: true,
      title: "Reset to default",
      children: `Are you sure you want to reset ${label} to default settings?`,
      labels: { cancel: "Cancel", confirm: "Reset" },
      onConfirm: onReset,
    });
  };

  return (
    <Stack gap="xs" mt="xs">
      <Title order={4} lh={0.5}>
        {label}
      </Title>
      <Fieldset h="100%" px={0} py={0}>
        <Flex direction={{ base: "column", md: "row" }} h="100%" align="center">
          <Box mx="md" mb="xl" mt="xl" w="100%">
            <Center mx="md">{component}</Center>
            <Divider hiddenFrom="md" mt="xl" />
          </Box>

          <Divider orientation="vertical" visibleFrom="md" />

          <Box px="lg" py="lg" h="100%">
            {isDirty ? (
              <Flex justify="flex-end">
                <Tooltip label="Reset to default">
                  <ActionIcon onClick={handleReset}>
                    <IconRestore />
                  </ActionIcon>
                </Tooltip>
              </Flex>
            ) : null}

            <Box mt="xs" mb="md" w={{ base: "20rem", lg: "14rem" }}>
              <Stack gap="xs">{settings}</Stack>
            </Box>
          </Box>
        </Flex>
      </Fieldset>
    </Stack>
  );
};
