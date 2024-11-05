import { Rating, Slider, Stack, Switch, Text } from "@mantine/core";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { rating, RatingProps } from "../../../store/RatingStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";

const Component = () => {
  return <Rating defaultValue={2} />;
};

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={rating.values[RatingProps.color].value}
        onChange={(value) => {
          rating.setValue(RatingProps.color, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={rating.values[RatingProps.size].value}
        onChange={(value) => {
          rating.setValue(RatingProps.size, value);
        }}
      />

      <Stack gap={0}>
        <Text fz="sm">Count</Text>
        <Slider
          label="Max value"
          value={rating.values[RatingProps.count].value}
          onChange={(value) => {
            rating.setValue(RatingProps.count, value);
          }}
          min={1}
          max={8}
        />
      </Stack>

      <Switch
        mt="xs"
        label="Hightlight selected only"
        value={rating.values[RatingProps.highlightSelectedOnly].value}
        onChange={(event) => {
          rating.setValue(
            RatingProps.highlightSelectedOnly,
            event.currentTarget.checked
          );
        }}
      />
    </>
  );
};

export const MyRating = () => {
  return (
    <ComponentsWrapper
      isDirty={rating.isDirty}
      label="Rating"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
