import { Flex, Title, Group, Tooltip, ActionIcon, Image } from "@mantine/core";
import { IconBrandGithub, IconBrandMantine } from "@tabler/icons-react";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";

import MTCIcon from "../../assets/images/MTCIcon.svg";

export const Header = () => {
  return (
    <Flex align="center" h="100%" px="md" justify="space-between">
      <Group gap="sm" align="flex-end">
        <Image src={MTCIcon} alt="MTC Icon" width={30} height={30} />
        <Title order={5}>Mantine Theme Creator</Title>
      </Group>
      <Group>
        <Tooltip label="Link to GitHub">
          <ActionIcon
            color="dark.9"
            component="a"
            href="https://github.com/FramtidsGustaf/mantine-theme-creator"
            target="_blank"
          >
            <IconBrandGithub />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="Link to Mantine">
          <ActionIcon
            color="blue.6"
            component="a"
            href="https://mantine.dev/"
            target="_blank"
          >
            <IconBrandMantine />
          </ActionIcon>
        </Tooltip>

        <ColorSchemeToggle />
      </Group>
    </Flex>
  );
};
