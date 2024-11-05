import { RingProgress, Slider, Stack, Switch, Text } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import {
  ringProgress,
  RingProgressProps,
} from "../../../store/RingProgressStore";

const Component = () => {
  return (
    <RingProgress
      sections={[
        {
          value: 50,
          color: "primary",
        },
        {
          value: 15,
          color: "secondary",
        },
        {
          value: 15,
          color: "tertiary",
        },
      ]}
    />
  );
};

const Settings = () => {
  return (
    <Stack>
      <Stack gap={0}>
        <Text fz="sm">Thickness</Text>
        <Slider
          max={40}
          min={1}
          label={(value) => value}
          value={ringProgress.values[RingProgressProps.thickness].value}
          onChange={(value) => {
            ringProgress.setValue(RingProgressProps.thickness, value);
          }}
        />
      </Stack>
      <Switch
        label="Round caps"
        checked={ringProgress.values[RingProgressProps.roundCaps].value}
        onChange={(event) => {
          ringProgress.setValue(
            RingProgressProps.roundCaps,
            event.currentTarget.checked
          );
        }}
      />
    </Stack>
  );
};

export const MyRingProgress = () => {
  return (
    <ComponentsWrapper
      isDirty={ringProgress.isDirty}
      label="RingProgress"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
