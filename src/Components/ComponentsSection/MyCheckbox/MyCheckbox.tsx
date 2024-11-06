import { Checkbox } from "@mantine/core";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { checkbox, CheckboxProps } from "../../../store/CheckboxStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

const Component = () => {
  return <Checkbox defaultChecked label="I agree to sell my privacy" />;
};

const labelPositions = [
  { label: "Right", value: "right" },
  { label: "Left", value: "left" },
];

const variants = [
  { value: "default", label: "Default" },
  { value: "filled", label: "Filled" },
];

const Settings = () => {
  return (
    <>
      <LabeledSegmentedControl
        label="Label position"
        data={labelPositions}
        value={checkbox.values[CheckboxProps.labelPosition].value}
        onChange={(value) => {
          checkbox.setValue(CheckboxProps.labelPosition, value);
        }}
      />

      <ColorSelect
        label="Color"
        value={checkbox.values[CheckboxProps.color].value}
        onChange={(value) => {
          checkbox.setValue(CheckboxProps.color, value);
        }}
      />

      <LabeledSegmentedControl
        label="Variant"
        data={variants}
        value={checkbox.values[CheckboxProps.variant].value}
        onChange={(value) => {
          checkbox.setValue(CheckboxProps.variant, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={checkbox.values[CheckboxProps.radius].value}
        onChange={(value) => {
          checkbox.setValue(CheckboxProps.radius, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={checkbox.values[CheckboxProps.size].value}
        onChange={(value) => {
          checkbox.setValue(CheckboxProps.size, value);
        }}
      />
    </>
  );
};

export const MyCheckbox = () => {
  return (
    <ComponentsWrapper
      label="Checkbox"
      isDirty={checkbox.isDirty}
      onReset={checkbox.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
