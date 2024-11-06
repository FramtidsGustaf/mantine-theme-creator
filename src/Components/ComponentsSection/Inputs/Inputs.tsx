import { TextInput } from "@mantine/core";
import { InputsProps, inputs } from "../../../store/InputsStore";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

const variants = [
  { value: "default", label: "Default" },
  { value: "filled", label: "Filled" },
  { value: "unstyled", label: "Unstyled" },
];

const Component = () => {
  return (
    <TextInput
      placeholder="Placeholder"
      label="Label"
      description="Desctription"
      w="50%"
    />
  );
};

const Settings = () => {
  return (
    <>
      <LabeledSegmentedControl
        label="Variant"
        data={variants}
        value={inputs.values[InputsProps.variant].value}
        onChange={(value) => {
          inputs.setValue(InputsProps.variant, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={inputs.values[InputsProps.size].value}
        onChange={(value) => {
          inputs.setValue(InputsProps.size, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={inputs.values[InputsProps.radius].value}
        onChange={(value) => {
          inputs.setValue(InputsProps.radius, value);
        }}
      />
    </>
  );
};

export const Inputs = () => {
  return (
    <ComponentsWrapper
      label="Inputs"
      isDirty={inputs.isDirty}
      onReset={inputs.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
