import { componentSignal } from "./componentSignal";

export enum SemiCircleProgressProps {
  fillDirection,
  orientation,
  color,
  thickness,
}

export const initialValues = [
  { name: "fillDirection", value: "left-to-right" },
  { name: "orientation", value: "up" },
  { name: "color", value: "primary" },
  { name: "thickness", value: 12 },
];

export const semiCircleProgress = componentSignal(initialValues);
