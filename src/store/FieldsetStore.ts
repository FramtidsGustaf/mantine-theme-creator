import { componentSignal } from "./componentSignal";

export enum FieldsetProps {
  variant,
  radius,
}

const initialValues = [
  {
    name: "variant",
    value: "default",
  },
  {
    name: "radius",
    value: "sm",
  },
];

export const fieldset = componentSignal(initialValues);
