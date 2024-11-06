import { Switch } from "@mantine/core";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SwitchProps, switchStore } from "../../../store/SwitchStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

const Component = () => {
  return <Switch label="I agree to sell my privacy" />;
};

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={switchStore.values[SwitchProps.color].value}
        onChange={(value) => {
          switchStore.setValue(SwitchProps.color, value);
        }}
      />

      <LabeledSegmentedControl
        label="Label position"
        data={[
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ]}
        value={switchStore.values[SwitchProps.labelPosition].value}
        onChange={(value) => {
          switchStore.setValue(SwitchProps.labelPosition, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={switchStore.values[SwitchProps.size].value}
        onChange={(value) => {
          switchStore.setValue(SwitchProps.size, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={switchStore.values[SwitchProps.radius].value}
        onChange={(value) => {
          switchStore.setValue(SwitchProps.radius, value);
        }}
      />
    </>
  );
};

export const MySwitch = () => {
  return (
    <ComponentsWrapper
      label="Switch"
      isDirty={switchStore.isDirty}
      onReset={switchStore.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
