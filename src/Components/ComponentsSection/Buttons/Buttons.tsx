import { ActionIcon, Button, Group, Select, Stack } from "@mantine/core";
import { ButtonsProps, buttons } from "../../../store/ButtonsStore";
import { IconThumbUp } from "@tabler/icons-react";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelectWithWithAndBlack } from "../../ColorSelect/ColorSelectWithWhiteAndBlack";

const variants = [
  {
    value: "default",
    label: "Default",
  },
  {
    value: "filled",
    label: "Filled",
  },
  {
    value: "light",
    label: "Light",
  },
  {
    value: "outline",
    label: "Outline",
  },
  {
    value: "subtle",
    label: "Subtle",
  },
  {
    value: "transparent",
    label: "Transparent",
  },
  {
    value: "white",
    label: "White",
  },
  {
    value: "gradient",
    label: "Gradient",
  },
];

const Component = () => {
  return (
    <Group>
      <Button>Press Me</Button>
      <ActionIcon>
        <IconThumbUp />
      </ActionIcon>
    </Group>
  );
};

const Settings = () => {
  return (
    <>
      <ColorSelectWithWithAndBlack
        label="Color"
        value={buttons.values[ButtonsProps.color].value}
        onChange={(value) => {
          buttons.setValue(ButtonsProps.color, value);
        }}
      />
      <Select
        data={variants}
        label="Variant"
        value={buttons.values[ButtonsProps.variant].value}
        allowDeselect={false}
        onChange={(value) => {
          buttons.setValue(ButtonsProps.variant, value);
        }}
      />
      <Stack gap={0}>
        <SizeAndRadiusSlider
          label="Size"
          value={buttons.values[ButtonsProps.size].value}
          onChange={(value) => {
            buttons.setValue(ButtonsProps.size, value);
          }}
        />

        <SizeAndRadiusSlider
          label="Radius"
          value={buttons.values[ButtonsProps.radius].value}
          onChange={(value) => {
            buttons.setValue(ButtonsProps.radius, value);
          }}
        />
      </Stack>
    </>
  );
};

export const Buttons = () => {
  return (
    <ComponentsWrapper
      label="Buttons"
      isDirty={buttons.isDirty}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
