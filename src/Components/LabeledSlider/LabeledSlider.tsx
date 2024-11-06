import { Slider, SliderProps, Stack, Text } from "@mantine/core";

interface LabeledSliderProps extends SliderProps {
  sliderLabel: string;
}

export const LabeledSlider = ({ sliderLabel, ...rest }: LabeledSliderProps) => {
  return (
    <Stack gap={0} mt={3}>
      <Text fz="sm">{sliderLabel}</Text>
      <Slider {...rest} />
    </Stack>
  );
};
