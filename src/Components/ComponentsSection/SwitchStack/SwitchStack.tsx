import { Stack } from "@mantine/core";

interface SwitchStackProps {
  children: React.ReactNode;
}

export const SwitchStack = ({ children }: SwitchStackProps) => {
  return (
    <Stack gap="xs" mt="xs">
      {children}
    </Stack>
  );
};
