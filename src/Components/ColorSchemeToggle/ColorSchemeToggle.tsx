import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const ColorSchemeToggle = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Tooltip label="Toggle color scheme">
      <ActionIcon onClick={toggleColorScheme}>
        {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
      </ActionIcon>
    </Tooltip>
  );
};
