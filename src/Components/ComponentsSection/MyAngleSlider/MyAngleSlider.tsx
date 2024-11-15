import { AngleSlider, Switch } from "@mantine/core";
import { LabeledSlider } from "../../LabeledSlider/LabeledSlider";
import { angleSlider, AngleSliderProps } from "../../../store/AngleSliderStore";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";

const Component = () => {
  return <AngleSlider />;
};

const Settings = () => {
  return (
    <>
      <LabeledSlider
        sliderLabel="Size"
        value={angleSlider.values[AngleSliderProps.size].value}
        onChange={(value) => angleSlider.setValue(AngleSliderProps.size, value)}
      />
      <LabeledSlider
        sliderLabel="Thumb size"
        value={angleSlider.values[AngleSliderProps.thumbSize].value}
        onChange={(value) =>
          angleSlider.setValue(AngleSliderProps.thumbSize, value)
        }
      />
      <Switch
        label="With label"
        checked={angleSlider.values[AngleSliderProps.withLabel].value}
        onChange={(event) =>
          angleSlider.setValue(
            AngleSliderProps.withLabel,
            event.currentTarget.checked
          )
        }
      />
    </>
  );
};

export const MyAngleSlider = () => {
  return (
    <ComponentsWrapper
      label="AngleSlider"
      isDirty={angleSlider.isDirty}
      onReset={angleSlider.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
