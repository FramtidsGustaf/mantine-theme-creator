import { Stack, Slider, Text, type MantineSize } from "@mantine/core";
import { Marks, Sizes } from "../../utils/constants";

interface SizeAndRadiusSliderProps {
  label: string;
  value: string;
  onChange: (value: MantineSize) => void;
}

export const SizeAndRadiusSlider = ({
  onChange,
  value,
  label,
}: SizeAndRadiusSliderProps) => {
  return (
    <Stack gap={0} mt="xs" mb="xl">
      <Text fz="sm">{label}</Text>
      <Slider
        marks={Marks}
        min={0}
        max={4}
        step={1}
        value={Sizes.indexOf(value)}
        onChange={(value) => onChange(Sizes[value] as MantineSize)}
        label={(value) => Sizes[value]}
      />
    </Stack>
  );
};
