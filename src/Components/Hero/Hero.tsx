import {
  Collapse,
  Container,
  Group,
  Title,
  ActionIcon,
  Text,
  Anchor,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMinus, IconPlus } from "@tabler/icons-react";

import MTCIcon from "../../assets/images/MTCIcon.svg";

export const Hero = () => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <Container w={{ base: "100%", md: "40rem" }}>
      <Group gap="xs">
        <Group>
          <Image src={MTCIcon} alt="MTC Icon" width={50} height={50} />
          <Title order={3}>Mantine Theme Creator</Title>
        </Group>
        <ActionIcon variant="subtle" onClick={toggle} size="sm">
          {opened ? <IconMinus /> : <IconPlus />}
        </ActionIcon>
      </Group>
      <Collapse in={opened} mt="lg">
        <Text>
          This is a tool to help you create a custom theme for your
          <Anchor c="blue.5" href="https://mantine.dev/" target="_blank">
            <Text display="inline" fw="bold" fz="lg">
              {" "}
              Mantine{" "}
            </Text>
          </Anchor>
          projects. You can customize colors, components, and more, and then
          copy the theme object to use in your project.
        </Text>
      </Collapse>
    </Container>
  );
};
