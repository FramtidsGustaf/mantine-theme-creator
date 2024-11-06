import { componentSignal } from "./componentSignal";

export enum CheckboxProps {
  labelPosition,
  color,
  variant,
  radius,
  size,
}

const initialValues = [
  {
    name: "labelPosition",
    value: "right",
  },
  {
    name: "color",
    value: null,
  },
  {
    name: "variant",
    value: "filled",
  },
  {
    name: "radius",
    value: "sm",
  },
  {
    name: "size",
    value: "sm",
  },
];

export const checkbox = componentSignal(initialValues);
