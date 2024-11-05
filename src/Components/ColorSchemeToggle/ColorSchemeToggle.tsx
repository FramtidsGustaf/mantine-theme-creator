import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const ColorSchemeToggle = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={toggleColorScheme}>
      {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  );
};
