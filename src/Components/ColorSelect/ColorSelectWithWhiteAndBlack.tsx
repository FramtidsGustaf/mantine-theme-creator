import { Select } from "@mantine/core";
import { ColorsWithWhiteAndBlack } from "../../store/ColorThemeStore";

interface ColorSelectWithWhiteAndBlackProps {
  label: string;
  value: string;
  onChange: (value: keyof ColorsWithWhiteAndBlack) => void;
}

const colors = [
  {
    label: "Primary",
    value: "primary",
  },
  {
    label: "Secondary",
    value: "secondary",
  },
  {
    label: "Tertiary",
    value: "tertiary",
  },
  {
    label: "Quaternary",
    value: "quaternary",
  },
  {
    label: "White",
    value: "white",
  },
  {
    label: "Black",
    value: "black",
  },
];

export const ColorSelectWithWithAndBlack = ({
  label,
  value,
  onChange,
}: ColorSelectWithWhiteAndBlackProps) => {
  return (
    <Select
      allowDeselect={false}
      data={colors}
      value={value}
      onChange={(value) => onChange(value as keyof ColorsWithWhiteAndBlack)}
      label={label}
    />
  );
};
