import { Stack, Slider, Text, MantinePrimaryShade } from "@mantine/core";
import { colorTheme } from "../../store/ColorThemeStore";

export const ShadeSlider = () => {
  return (
    <Stack gap={0}>
      <Text fz="sm">Primary Shade</Text>
      <Text c="dimmed" fz="xs">
        Adjust the primary shade
      </Text>
      <Slider
        mt="sm"
        value={colorTheme.primaryShade as number}
        onChange={(value) =>
          colorTheme.setPrimaryShade(value as unknown as MantinePrimaryShade)
        }
        min={0}
        max={9}
        step={1}
      />
    </Stack>
  );
};
