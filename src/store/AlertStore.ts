import { componentSignal } from "./componentSignal";

export enum AlertProps {
  variant,
  color,
  radius,
  withCloseButton,
}

const initialValues = [
  {
    name: "variant",
    value: "light",
  },
  {
    name: "color",
    value: "primary",
  },
  {
    name: "radius",
    value: "sm",
  },
  {
    name: "withCloseButton",
    value: false,
  },
];

export const alert = componentSignal(initialValues);
