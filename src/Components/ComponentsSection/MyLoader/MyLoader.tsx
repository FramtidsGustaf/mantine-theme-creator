import { Text, Loader, Stack, SegmentedControl } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { LoaderProps, newLoader } from "../../../store/LoaderStore";

const types = [
  {
    label: "Oval",
    value: "oval",
  },
  {
    label: "Bars",
    value: "bars",
  },
  {
    label: "Dots",
    value: "dots",
  },
];

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={newLoader.values[LoaderProps.color].value}
        onChange={(value) => {
          newLoader.setValue(LoaderProps.color, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={newLoader.values[LoaderProps.size].value}
        onChange={(value) => {
          newLoader.setValue(LoaderProps.size, value);
        }}
      />

      <Stack gap={0}>
        <Text fz="sm">Type</Text>
        <SegmentedControl
          data={types}
          value={newLoader.values[LoaderProps.type].value}
          onChange={(value) => {
            newLoader.setValue(LoaderProps.type, value);
          }}
        />
      </Stack>
    </>
  );
};

export const MyLoader = () => {
  return (
    <ComponentsWrapper
      isDirty={newLoader.isDirty}
      label="Loader"
      component={<Loader />}
      settings={<Settings />}
    />
  );
};
