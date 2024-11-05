import { Box, Slider, Stack, Switch } from "@mantine/core";
import { slider, SliderProps } from "../../../store/SliderStore";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";

const Component = () => {
  return (
    <Box w="100%">
      <Slider
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </Box>
  );
};

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={slider.values[SliderProps.color].value}
        onChange={(value) => {
          slider.setValue(SliderProps.color, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={slider.values[SliderProps.size].value}
        onChange={(value) => {
          slider.setValue(SliderProps.size, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={slider.values[SliderProps.radius].value}
        onChange={(value) => {
          slider.setValue(SliderProps.radius, value);
        }}
      />

      <Stack gap="xs" mt="xs">
        <Switch
          label="Show label on hover"
          checked={slider.values[SliderProps.showLabelOnHover].value}
          onChange={(event) => {
            slider.setValue(
              SliderProps.showLabelOnHover,
              event.currentTarget.checked
            );
          }}
        />

        <Switch
          label="Label always on"
          checked={slider.values[SliderProps.labelAlwaysOn].value}
          onChange={(event) => {
            slider.setValue(
              SliderProps.labelAlwaysOn,
              event.currentTarget.checked
            );
          }}
        />
      </Stack>
    </>
  );
};

export const MySlider = () => {
  return (
    <ComponentsWrapper
      isDirty={slider.isDirty}
      label="Slider"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
