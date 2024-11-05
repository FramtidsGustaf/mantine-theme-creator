import { componentSignal } from "./componentSignal";

export enum SwitchProps {
  color,
  labelPosition,
  size,
  radius,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "labelPosition", value: "right" },
  { name: "size", value: "md" },
  { name: "radius", value: "xl" },
];

export const switchStore = componentSignal(initialValues);
