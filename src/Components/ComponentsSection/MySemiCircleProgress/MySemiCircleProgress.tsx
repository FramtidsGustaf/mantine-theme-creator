import {
  SegmentedControl,
  SemiCircleProgress,
  Slider,
  Stack,
  Text,
} from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import {
  semiCircleProgress,
  SemiCircleProgressProps,
} from "../../../store/SemiCircleProgressStore";

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
    <Stack gap="xs">
      <Stack gap={0}>
        <Text fz="sm">Fill direction</Text>
        <SegmentedControl
          data={fillDirections}
          value={
            semiCircleProgress.values[SemiCircleProgressProps.fillDirection]
              .value
          }
          onChange={(value) => {
            semiCircleProgress.setValue(
              SemiCircleProgressProps.fillDirection,
              value
            );
          }}
        />
      </Stack>

      <Stack gap={0}>
        <Text fz="sm">Orientation</Text>
        <SegmentedControl
          data={orientation}
          value={
            semiCircleProgress.values[SemiCircleProgressProps.orientation]
              .value
          }
          onChange={(value) => {
            semiCircleProgress.setValue(
              SemiCircleProgressProps.orientation,
              value
            );
          }}
        />
      </Stack>

      <ColorSelect
        label="Color"
        value={
          semiCircleProgress.values[SemiCircleProgressProps.color].value
        }
        onChange={(value) => {
          semiCircleProgress.setValue(SemiCircleProgressProps.color, value);
        }}
      />

      <Stack gap={0}>
        <Text fz="sm">Thickness</Text>
        <Slider
          max={20}
          min={1}
          label={(value) => value}
          value={
            semiCircleProgress.values[SemiCircleProgressProps.thickness]
              .value
          }
          onChange={(value) => {
            semiCircleProgress.setValue(
              SemiCircleProgressProps.thickness,
              value
            );
          }}
        />
      </Stack>
    </Stack>
  );
};

export const MySemiCircleProgress = () => {
  return (
    <ComponentsWrapper
      isDirty={semiCircleProgress.isDirty}
      label="SemiCircleProgress"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
