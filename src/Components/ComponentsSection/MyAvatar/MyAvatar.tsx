import { Avatar, Select } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { AvatarProps, avatar } from "../../../store/AvatarStore";

const variants = [
  { label: "Filled", value: "filled" },
  { label: "Light", value: "light" },
  {
    label: "Outline",
    value: "outline",
  },
  {
    label: "Transparent",
    value: "transparent",
  },
  {
    label: "White",
    value: "white",
  },
  {
    label: "Default",
    value: "default",
  },
];

const Settings = () => {
  return (
    <>
      <Select
        label="Variant"
        placeholder="Choose variant"
        data={variants}
        value={avatar.values[AvatarProps.variant].value}
        onChange={(value) => avatar.setValue(AvatarProps.variant, value)}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={avatar.values[AvatarProps.radius].value}
        onChange={(value) => {
          avatar.setValue(AvatarProps.radius, value);
        }}
      />
      <SizeAndRadiusSlider
        label="Size"
        value={avatar.values[AvatarProps.size].value}
        onChange={(value) => {
          avatar.setValue(AvatarProps.size, value);
        }}
      />

      <ColorSelect
        label="Color"
        value={avatar.values[AvatarProps.color].value}
        onChange={(value) => {
          avatar.setValue(AvatarProps.color, value);
        }}
      />
    </>
  );
};

export const MyAvatar = () => {
  return (
    <ComponentsWrapper
      isDirty={avatar.isDirty}
      label="Avatar"
      component={<Avatar />}
      settings={<Settings />}
    />
  );
};
