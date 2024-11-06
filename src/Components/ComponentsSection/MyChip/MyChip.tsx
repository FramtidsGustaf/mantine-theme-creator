import { Chip } from "@mantine/core";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { chip, ChipProps } from "../../../store/ChipStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

const Component = () => {
  return <Chip defaultChecked>Awesome chip</Chip>;
};

const variants = [
  { value: "filled", label: "Filled" },
  { value: "outline", label: "Outline" },
  { value: "light", label: "Light" },
];

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

      <LabeledSegmentedControl
        label="Variant"
        data={variants}
        value={chip.values[ChipProps.variant].value}
        onChange={(value) => chip.setValue(ChipProps.variant, value)}
      />

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
      onReset={chip.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
