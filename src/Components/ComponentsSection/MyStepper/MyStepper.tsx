import { Stack, Stepper } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { stepper, StepperProps } from "../../../store/StepperStore";

export const MyStepper = () => {
  return (
    <ComponentsWrapper
      isDirty={stepper.isDirty}
      label="Stepper"
      component={
        <Stepper active={1}>
          <Stepper.Step label="Step 1" description="Create an account" />
          <Stepper.Step label="Step 2" description="Verify email" />
        </Stepper>
      }
      settings={
        <>
          <ColorSelect
            label="Color"
            value={stepper.values[StepperProps.color].value}
            onChange={(value) => {
              stepper.setValue(StepperProps.color, value);
            }}
          />

          <Stack gap={0}>
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
          </Stack>
        </>
      }
    />
  );
};
