import { componentSignal } from "./componentSignal";

export enum RadioProps {
  labelPosition,
  size,
  color,
  variant,
}

export const initialValues = [
  {
    name: "labelPosition",
    value: "right",
  },
  {
    name: "size",
    value: "sm",
  },
  {
    name: "color",
    value: "primary",
  },
  {
    name: "variant",
    value: "filled",
  },
];

export const newRadio = componentSignal(initialValues);
