import { Radio } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { newRadio, RadioProps } from "../../../store/RadioStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

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
      <LabeledSegmentedControl
        label="Label position"
        data={labelPositions}
        value={newRadio.values[RadioProps.labelPosition].value}
        onChange={(value) => newRadio.setValue(RadioProps.labelPosition, value)}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={newRadio.values[RadioProps.size].value}
        onChange={(value) => {
          newRadio.setValue(RadioProps.size, value);
        }}
      />

      <ColorSelect
        label="Color"
        value={newRadio.values[RadioProps.color].value}
        onChange={(value) => {
          newRadio.setValue(RadioProps.color, value);
        }}
      />

      <LabeledSegmentedControl
        label="Variant"
        data={variants}
        value={newRadio.values[RadioProps.variant].value}
        onChange={(value) => {
          newRadio.setValue(RadioProps.variant, value);
        }}
      />
    </>
  );
};

export const MyRadio = () => {
  return (
    <ComponentsWrapper
      label="Radio"
      isDirty={newRadio.isDirty}
      onReset={newRadio.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
