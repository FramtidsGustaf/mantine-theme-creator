import { Checkbox, SegmentedControl, Stack, Text } from "@mantine/core";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { checkbox, CheckboxProps } from "../../../store/CheckboxStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";

const Component = () => {
  return <Checkbox defaultChecked label="I agree to sell my privacy" />;
};

const Settings = () => {
  return (
    <>
      <Stack gap={2}>
        <Text fz="sm">Label position</Text>
        <SegmentedControl
          data={[
            { label: "Right", value: "right" },
            { label: "Left", value: "left" },
          ]}
        />
      </Stack>

      <ColorSelect
        label="Color"
        value={checkbox.values[CheckboxProps.color].value}
        onChange={(value) => {
          checkbox.setValue(CheckboxProps.color, value);
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
      component={<Component />}
      settings={<Settings />}
    />
  );
};
