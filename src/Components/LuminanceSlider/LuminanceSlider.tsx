import { Slider, Stack, Text } from "@mantine/core";
import { colorTheme } from "../../store/ColorThemeStore";

export const LuminanceSlider = () => {
  return (
    <Stack gap={0}>
      <Text fz="sm">Luminance Threshold</Text>
      <Text c="dimmed" fz="xs">
        Adjust the luminance threshold for color contrast
      </Text>
      <Slider
        mt="sm"
        value={colorTheme.luminanceThreshold}
        onChange={colorTheme.setLuminanceThreshold}
        min={0}
        max={1}
        label={(value) => value.toFixed(1)}
        step={0.1}
      />
    </Stack>
  );
};
