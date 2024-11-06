import { Loader } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { LoaderProps, loader } from "../../../store/LoaderStore";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

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
        value={loader.values[LoaderProps.color].value}
        onChange={(value) => {
          loader.setValue(LoaderProps.color, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={loader.values[LoaderProps.size].value}
        onChange={(value) => {
          loader.setValue(LoaderProps.size, value);
        }}
      />

      <LabeledSegmentedControl
        label="Type"
        data={types}
        value={loader.values[LoaderProps.type].value}
        onChange={(value) => {
          loader.setValue(LoaderProps.type, value);
        }}
      />
    </>
  );
};

export const MyLoader = () => {
  return (
    <ComponentsWrapper
      label="Loader"
      isDirty={loader.isDirty}
      onReset={loader.reset}
      component={<Loader />}
      settings={<Settings />}
    />
  );
};
