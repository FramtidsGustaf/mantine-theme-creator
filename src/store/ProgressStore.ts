import { componentSignal } from "./componentSignal";

export enum ProgressProps {
  color,
  radius,
  size,
  striped,
  animated,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "radius", value: "sm" },
  { name: "size", value: "md" },
  { name: "striped", value: false },
  { name: "animated", value: false },
];

export const progress = componentSignal(initialValues);
