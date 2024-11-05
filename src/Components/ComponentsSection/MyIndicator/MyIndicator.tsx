import {
  Avatar,
  Indicator,
  Select,
  Slider,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { IndicatorProps, indicator } from "../../../store/IndicatorStore";

const Component = () => {
  return (
    <Indicator>
      <Avatar />
    </Indicator>
  );
};

const positions = [
  {
    label: "Top-start",
    value: "top-start",
  },
  {
    label: "Top-center",
    value: "top-center",
  },
  {
    label: "Top-end",
    value: "top-end",
  },
  {
    label: "Middle-start",
    value: "middle-start",
  },
  {
    label: "Middle-center",
    value: "middle-center",
  },
  {
    label: "Middle-end",
    value: "middle-end",
  },
  {
    label: "Bottom-start",
    value: "bottom-start",
  },
  {
    label: "Bottom-center",
    value: "bottom-center",
  },
  {
    label: "Bottom-end",
    value: "bottom-end",
  },
];

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={indicator.values[IndicatorProps.color].value}
        onChange={(value) => {
          indicator.setValue(IndicatorProps.color, value);
        }}
      />
      <Select
        data={positions}
        label="Position"
        allowDeselect={false}
        value={indicator.values[IndicatorProps.position].value}
        onChange={(value) => {
          indicator.setValue(IndicatorProps.position, value);
        }}
      />
      <SizeAndRadiusSlider
        label="Radius"
        value={indicator.values[IndicatorProps.radius].value}
        onChange={(value) => {
          indicator.setValue(IndicatorProps.radius, value);
        }}
      />
      <Stack gap={0}>
        <Text fz="sm">Size</Text>
        <Slider
          min={6}
          max={30}
          value={indicator.values[IndicatorProps.size].value}
          onChange={(value) => {
            indicator.setValue(IndicatorProps.size, value);
          }}
        />
      </Stack>
      <Switch
        mt="sm"
        label="With border"
        checked={indicator.values[IndicatorProps.withBorder].value}
        onChange={(event) => {
          indicator.setValue(
            IndicatorProps.withBorder,
            event.currentTarget.checked
          );
        }}
      />
    </>
  );
};

export const MyIndicator = () => {
  return (
    <ComponentsWrapper
      isDirty={indicator.isDirty}
      label="Indicator"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
