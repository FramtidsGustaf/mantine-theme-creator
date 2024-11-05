import { Radio, SegmentedControl, Stack, Text } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { newRadio, RadioProps } from "../../../store/RadioStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";

const Component = () => {
  return <Radio label="Radio" />;
};

const labelPositions = [
  {
    label: "Left",
    value: "left",
  },
  {
    label: "Right",
    value: "right",
  },
];

const variants = [
  {
    label: "Filled",
    value: "filled",
  },
  {
    label: "Outline",
    value: "outline",
  },
];

const Settings = () => {
  return (
    <>
      <Stack gap={2}>
        <Text size="sm">Label position</Text>
        <SegmentedControl
          data={labelPositions}
          value={newRadio.values[RadioProps.labelPosition].value}
          onChange={(value) =>
            newRadio.setValue(RadioProps.labelPosition, value)
          }
        />
      </Stack>

      <SizeAndRadiusSlider
        label="Size"
        value={newRadio.values[RadioProps.size].value}
        onChange={(value) => {
          newRadio.setValue(RadioProps.size, value);
        }}
      />

      <Stack gap={2}>
        <Text size="sm">Variant</Text>
        <SegmentedControl
          data={variants}
          value={newRadio.values[RadioProps.variant].value}
          onChange={(value) => {
            newRadio.setValue(RadioProps.variant, value);
          }}
        />
      </Stack>
    </>
  );
};

export const MyRadio = () => {
  return (
    <ComponentsWrapper
      isDirty={newRadio.isDirty}
      label="Radio"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
