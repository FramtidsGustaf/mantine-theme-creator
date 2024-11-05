import { componentSignal } from "./componentSignal";

export enum PaperProps {
  shadow,
  radius,
  withBorder,
}

const initialValues = [
  { name: "shadow", value: "xs" },
  { name: "radius", value: "sm" },
  { name: "withBorder", value: false },
];

export const paper = componentSignal(initialValues);
