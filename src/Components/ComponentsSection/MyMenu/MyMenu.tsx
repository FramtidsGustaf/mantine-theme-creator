import { Menu, Button, rem, Text, Select, Switch } from "@mantine/core";
import {
  IconSettings,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconArrowsLeftRight,
  IconTrash,
} from "@tabler/icons-react";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { useDisclosure } from "@mantine/hooks";
import { MenuProps, menu } from "../../../store/MenuStore";
import { LabeledSlider } from "../../LabeledSlider/LabeledSlider";

const Component = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Menu opened={opened} shadow="md" width={200}>
      <Menu.Target>
        <Button onClick={toggle}>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Messages
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSearch style={{ width: rem(14), height: rem(14) }} />
          }
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={
            <IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

const positions = [
  {
    label: "Bottom",
    value: "bottom",
  },
  {
    label: "Bottom-start",
    value: "bottom-start",
  },
  {
    label: "Bottom-end",
    value: "bottom-end",
  },
  {
    label: "Top",
    value: "top",
  },
  {
    label: "Top-start",
    value: "top-start",
  },
  {
    label: "Top-end",
    value: "top-end",
  },
  {
    label: "Left",
    value: "left",
  },
  {
    label: "Left-start",
    value: "left-start",
  },
  {
    label: "Left-end",
    value: "left-end",
  },
  {
    label: "Right",
    value: "right",
  },
  {
    label: "Right-start",
    value: "right-start",
  },
  {
    label: "Right-end",
    value: "right-end",
  },
];

const arrowPositions = [
  {
    label: "Side",
    value: "side",
  },
  {
    label: "Center",
    value: "center",
  },
];

const Settings = () => {
  return (
    <>
      <Select
        data={positions}
        label="Position"
        value={menu.values[MenuProps.position].value}
        allowDeselect={false}
        onChange={(value) => {
          menu.setValue(MenuProps.position, value);
        }}
      />

      <LabeledSlider
        sliderLabel="Offset"
        max={20}
        min={-20}
        value={menu.values[MenuProps.offset].value}
        onChange={(value) => {
          menu.setValue(MenuProps.offset, value);
        }}
      />

      <Switch
        mt="xs"
        mb={4}
        label="With arrow"
        checked={menu.values[MenuProps.withArrow].value}
        onChange={(event) => {
          menu.setValue(MenuProps.withArrow, event.currentTarget.checked);
        }}
      />

      <Select
        data={arrowPositions}
        label="Arrow position"
        value={menu.values[MenuProps.arrowPosition].value}
        allowDeselect={false}
        onChange={(value) => {
          menu.setValue(MenuProps.arrowPosition, value);
        }}
      />
    </>
  );
};

export const MyMenu = () => {
  return (
    <ComponentsWrapper
      label="Menu"
      isDirty={menu.isDirty}
      onReset={menu.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
