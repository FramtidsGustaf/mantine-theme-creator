import { Stepper } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { stepper, StepperProps } from "../../../store/StepperStore";

const Component = () => {
  return (
    <Stepper active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
};

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={stepper.values[StepperProps.color].value}
        onChange={(value) => {
          stepper.setValue(StepperProps.color, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={stepper.values[StepperProps.radius].value}
        onChange={(value) => {
          stepper.setValue(StepperProps.radius, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={stepper.values[StepperProps.size].value}
        onChange={(value) => {
          stepper.setValue(StepperProps.size, value);
        }}
      />
    </>
  );
};

export const MyStepper = () => {
  return (
    <ComponentsWrapper
      label="Stepper"
      isDirty={stepper.isDirty}
      onReset={stepper.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
