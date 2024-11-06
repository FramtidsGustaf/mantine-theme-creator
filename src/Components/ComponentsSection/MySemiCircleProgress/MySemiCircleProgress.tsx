import { SemiCircleProgress } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import {
  semiCircleProgress,
  SemiCircleProgressProps,
} from "../../../store/SemiCircleProgressStore";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";
import { LabeledSlider } from "../../LabeledSlider/LabeledSlider";

const Component = () => {
  return <SemiCircleProgress value={40} size={200} label="Label" />;
};

const fillDirections = [
  {
    label: "Right to left",
    value: "right-to-left",
  },
  {
    label: "Left to right",
    value: "left-to-right",
  },
];

const orientation = [
  {
    label: "Up",
    value: "up",
  },
  {
    label: "Down",
    value: "down",
  },
];

const Settings = () => {
  return (
    <>
      <LabeledSegmentedControl
        label="Fill direction"
        data={fillDirections}
        value={
          semiCircleProgress.values[SemiCircleProgressProps.fillDirection].value
        }
        onChange={(value) => {
          semiCircleProgress.setValue(
            SemiCircleProgressProps.fillDirection,
            value
          );
        }}
      />

      <LabeledSegmentedControl
        label="Orientation"
        data={orientation}
        value={
          semiCircleProgress.values[SemiCircleProgressProps.orientation].value
        }
        onChange={(value) => {
          semiCircleProgress.setValue(
            SemiCircleProgressProps.orientation,
            value
          );
        }}
      />

      <ColorSelect
        label="Color"
        value={semiCircleProgress.values[SemiCircleProgressProps.color].value}
        onChange={(value) => {
          semiCircleProgress.setValue(SemiCircleProgressProps.color, value);
        }}
      />

      <LabeledSlider
        sliderLabel="Thickness"
        max={20}
        min={1}
        label={(value) => value}
        value={
          semiCircleProgress.values[SemiCircleProgressProps.thickness].value
        }
        onChange={(value) => {
          semiCircleProgress.setValue(SemiCircleProgressProps.thickness, value);
        }}
      />
    </>
  );
};

export const MySemiCircleProgress = () => {
  return (
    <ComponentsWrapper
      label="SemiCircleProgress"
      isDirty={semiCircleProgress.isDirty}
      onReset={semiCircleProgress.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
