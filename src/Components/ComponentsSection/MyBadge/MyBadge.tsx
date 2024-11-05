import { Badge, Select } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { BadgeProps, badge } from "../../../store/BagdeStore";

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
    label: "Dot",
    value: "dot",
  },
  {
    label: "Transparent",
    value: "transparent",
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
        value={badge.values[BadgeProps.variant].value}
        allowDeselect={false}
        onChange={(value) => {
          badge.setValue(BadgeProps.variant, value);
        }}
      />
      <ColorSelect
        label="Color"
        value={badge.values[BadgeProps.color].value}
        onChange={(value) => {
          badge.setValue(BadgeProps.color, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={badge.values[BadgeProps.size].value}
        onChange={(value) => {
          badge.setValue(BadgeProps.size, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={badge.values[BadgeProps.radius].value}
        onChange={(value) => {
          badge.setValue(BadgeProps.radius, value);
        }}
      />
    </>
  );
};

export const MyBadge = () => {
  return (
    <ComponentsWrapper
      isDirty={badge.isDirty}
      label="Badge"
      component={<Badge>Bagde</Badge>}
      settings={<Settings />}
    />
  );
};
