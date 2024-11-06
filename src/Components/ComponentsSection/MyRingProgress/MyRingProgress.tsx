import { RingProgress, Switch } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import {
  ringProgress,
  RingProgressProps,
} from "../../../store/RingProgressStore";
import { LabeledSlider } from "../../LabeledSlider/LabeledSlider";

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
    <>
      <LabeledSlider
        sliderLabel="Thickness"
        max={40}
        min={1}
        label={(value) => value}
        value={ringProgress.values[RingProgressProps.thickness].value}
        onChange={(value) => {
          ringProgress.setValue(RingProgressProps.thickness, value);
        }}
      />

      <Switch
        mt="xs"
        label="Round caps"
        checked={ringProgress.values[RingProgressProps.roundCaps].value}
        onChange={(event) => {
          ringProgress.setValue(
            RingProgressProps.roundCaps,
            event.currentTarget.checked
          );
        }}
      />
    </>
  );
};

export const MyRingProgress = () => {
  return (
    <ComponentsWrapper
      label="RingProgress"
      isDirty={ringProgress.isDirty}
      onReset={ringProgress.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
