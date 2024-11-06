import { Chip, SegmentedControl, Stack, Text } from "@mantine/core";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { chip, ChipProps } from "../../../store/ChipStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";

const Component = () => {
  return <Chip defaultChecked>Awesome chip</Chip>;
};

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={chip.values[ChipProps.color].value}
        onChange={(value) => {
          chip.setValue(ChipProps.color, value);
        }}
      />

      <Stack gap={2}>
        <Text fz="sm">Variant</Text>
        <SegmentedControl
          data={[
            { value: "filled", label: "Filled" },
            { value: "outline", label: "Outline" },
            { value: "light", label: "Light" },
          ]}
          value={chip.values[ChipProps.variant].value}
          onChange={(value) => chip.setValue(ChipProps.variant, value)}
        />
      </Stack>

      <SizeAndRadiusSlider
        label="Size"
        value={chip.values[ChipProps.size].value}
        onChange={(value) => chip.setValue(ChipProps.size, value)}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={chip.values[ChipProps.radius].value}
        onChange={(value) => chip.setValue(ChipProps.radius, value)}
      />
    </>
  );
};

export const MyChip = () => {
  return (
    <ComponentsWrapper
      label="Chip"
      isDirty={chip.isDirty}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
