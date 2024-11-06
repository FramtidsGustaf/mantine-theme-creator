import { componentSignal } from "./componentSignal";

export enum ChipProps {
  color,
  variant,
  size,
  radius,
}

const initialValues = [
  {
    name: "color",
    value: "primary",
  },
  {
    name: "variant",
    value: "filled",
  },
  {
    name: "size",
    value: "sm",
  },
  {
    name: "radius",
    value: "xl",
  },
];

export const chip = componentSignal(initialValues);
