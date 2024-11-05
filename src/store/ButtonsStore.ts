import { componentSignal } from "./componentSignal";

export enum ButtonsProps {
  variant,
  size,
  radius,
  color,
}

const initialValues = [
  { name: "variant", value: "filled" },
  { name: "size", value: "md" },
  { name: "radius", value: "sm" },
  { name: "color", value: "primary" },
];

export const buttons = componentSignal(initialValues);
