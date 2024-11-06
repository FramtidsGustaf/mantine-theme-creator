import { Fieldset, TextInput } from "@mantine/core";
import { fieldset, FieldsetProps } from "../../../store/FieldsetStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

const Component = () => {
  return (
    <Fieldset legend="Personal information">
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
};

const variants = [
  { value: "default", label: "Default" },
  { value: "filled", label: "Filled" },
  {
    value: "unstyled",
    label: "Unstyled",
  },
];

const Settings = () => {
  return (
    <>
      <LabeledSegmentedControl
        label="Variant"
        fullWidth
        data={variants}
        value={fieldset.values[FieldsetProps.variant].value}
        onChange={(value) => fieldset.setValue(FieldsetProps.variant, value)}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={fieldset.values[FieldsetProps.radius].value}
        onChange={(value) => fieldset.setValue(FieldsetProps.radius, value)}
      />
    </>
  );
};

export const MyFieldset = () => {
  return (
    <ComponentsWrapper
      label="Fieldset"
      isDirty={fieldset.isDirty}
      onReset={fieldset.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
