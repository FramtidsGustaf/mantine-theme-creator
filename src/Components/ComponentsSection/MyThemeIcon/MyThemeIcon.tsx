import { Select, ThemeIcon } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { themeIcon, ThemeIconProps } from "../../../store/ThemeIconStore";

const Component = () => {
  return (
    <ThemeIcon>
      <IconPhoto style={{ width: "70%", height: "70%" }} />
    </ThemeIcon>
  );
};

const variants = [
  {
    label: "Filled",
    value: "filled",
  },
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Outline",
    value: "outline",
  },
  {
    label: "Default",
    value: "default",
  },
  {
    label: "White",
    value: "white",
  },
];

const Settings = () => {
  return (
    <>
      <Select
        data={variants}
        label="Variant"
        placeholder="Select variant"
        allowDeselect={false}
        value={themeIcon.values[ThemeIconProps.variant].value}
        onChange={(value) => {
          themeIcon.setValue(ThemeIconProps.variant, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={themeIcon.values[ThemeIconProps.radius].value}
        onChange={(value) => {
          themeIcon.setValue(ThemeIconProps.radius, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={themeIcon.values[ThemeIconProps.size].value}
        onChange={(value) => {
          themeIcon.setValue(ThemeIconProps.size, value);
        }}
      />

      <ColorSelect
        label="Color"
        value={themeIcon.values[ThemeIconProps.color].value}
        onChange={(value) => {
          themeIcon.setValue(ThemeIconProps.color, value);
        }}
      />
    </>
  );
};

export const MyThemeIcon = () => {
  return (
    <ComponentsWrapper
      isDirty={themeIcon.isDirty}
      label="ThemeIcon"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
