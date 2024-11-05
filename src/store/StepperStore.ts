import { componentSignal } from "./componentSignal";

export enum StepperProps {
  color,
  radius,
  size,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "radius", value: "xl" },
  { name: "size", value: "md" },
];

export const stepper = componentSignal(initialValues);
