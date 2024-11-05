import { componentSignal } from "./componentSignal";

export enum InputsProps {
  variant,
  size,
  radius,
}

const initialValues = [
  { name: "variant", value: "default" },
  { name: "size", value: "sm" },
  { name: "radius", value: "sm" },
];

export const inputs = componentSignal(initialValues);
