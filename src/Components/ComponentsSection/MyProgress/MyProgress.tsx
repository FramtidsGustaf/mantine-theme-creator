import { Progress, Stack, Switch } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { progress, ProgressProps } from "../../../store/ProgressStore";

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={progress.values[ProgressProps.color].value}
        onChange={(value) => {
          progress.setValue(ProgressProps.color, value);
        }}
      />
      <SizeAndRadiusSlider
        label="Radius"
        value={progress.values[ProgressProps.radius].value}
        onChange={(value) => {
          progress.setValue(ProgressProps.radius, value);
        }}
      />
      <SizeAndRadiusSlider
        label="Size"
        value={progress.values[ProgressProps.size].value}
        onChange={(value) => {
          progress.setValue(ProgressProps.size, value);
        }}
      />
      <Stack gap="xs" mt="xs">
        <Switch
          label="Striped"
          checked={progress.values[ProgressProps.striped].value}
          onChange={(event) => {
            progress.setValue(
              ProgressProps.striped,
              event.currentTarget.checked
            );
          }}
        />
        <Switch
          label="Animated"
          checked={progress.values[ProgressProps.animated].value}
          onChange={(event) => {
            progress.setValue(
              ProgressProps.animated,
              event.currentTarget.checked
            );
          }}
        />
      </Stack>
    </>
  );
};

export const MyProgress = () => {
  return (
    <ComponentsWrapper
      label="Progress"
      isDirty={progress.isDirty}
      onReset={progress.reset}
      component={<Progress value={50} w="100%" />}
      settings={<Settings />}
    />
  );
};
