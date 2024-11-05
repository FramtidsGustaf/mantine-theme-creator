import { SegmentedControl, Stack, Switch, Text } from "@mantine/core";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SwitchProps, switchStore } from "../../../store/SwitchStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";

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

      <Stack gap={2} mt="xs">
        <Text fz="sm">Label position</Text>
        <SegmentedControl
          data={[
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ]}
          value={switchStore.values[SwitchProps.labelPosition].value}
          onChange={(value) => {
            switchStore.setValue(SwitchProps.labelPosition, value);
          }}
        />
      </Stack>

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
      isDirty={switchStore.isDirty}
      label="Switch"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
