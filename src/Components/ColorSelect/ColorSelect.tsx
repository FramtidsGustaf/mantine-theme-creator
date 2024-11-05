import { Select } from "@mantine/core";
import { Colors } from "../../store/ColorThemeStore";

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
];

interface ColorSelectProps {
  label: string;
  value: string;
  onChange: (value: keyof Colors) => void;
}

export const ColorSelect = ({ label, value, onChange }: ColorSelectProps) => {
  return (
    <Select
      data={colors}
      value={value}
      onChange={(value) => onChange(value as keyof Colors)}
      label={label}
    />
  );
};
