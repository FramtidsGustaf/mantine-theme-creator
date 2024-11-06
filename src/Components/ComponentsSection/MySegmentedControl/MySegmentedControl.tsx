import { SegmentedControl, Switch } from "@mantine/core";
import {
  segmentedControl,
  SegmentedControlProps,
} from "../../../store/SegmentedControlStore";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";
import { SwitchStack } from "../SwitchStack/SwitchStack";

const Component = () => {
  return <SegmentedControl data={["React", "Angular", "Vue"]} />;
};

const Settings = () => {
  return (
    <>
      <LabeledSegmentedControl
        label="Orientation"
        data={["horizontal", "vertical"]}
        value={segmentedControl.values[SegmentedControlProps.orientation].value}
        onChange={(value) => {
          segmentedControl.setValue(SegmentedControlProps.orientation, value);
        }}
      />

      <SwitchStack>
        <Switch
          label="Full width"
          checked={
            segmentedControl.values[SegmentedControlProps.fullWidth].value
          }
          onChange={(event) => {
            segmentedControl.setValue(
              SegmentedControlProps.fullWidth,
              event.currentTarget.checked
            );
          }}
        />

        <Switch
          label="With items border"
          checked={
            segmentedControl.values[SegmentedControlProps.withItemsBorders]
              .value
          }
          onChange={(event) => {
            segmentedControl.setValue(
              SegmentedControlProps.withItemsBorders,
              event.currentTarget.checked
            );
          }}
        />
      </SwitchStack>

      <SizeAndRadiusSlider
        label="Size"
        value={segmentedControl.values[SegmentedControlProps.size].value}
        onChange={(value) => {
          segmentedControl.setValue(SegmentedControlProps.size, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={segmentedControl.values[SegmentedControlProps.radius].value}
        onChange={(value) => {
          segmentedControl.setValue(SegmentedControlProps.radius, value);
        }}
      />

      <ColorSelect
        label="Color"
        value={segmentedControl.values[SegmentedControlProps.color].value}
        onChange={(value) => {
          segmentedControl.setValue(SegmentedControlProps.color, value);
        }}
      />
    </>
  );
};

export const MySegmentedControl = () => {
  return (
    <ComponentsWrapper
      label="SegmentedControl"
      isDirty={segmentedControl.isDirty}
      onReset={segmentedControl.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
