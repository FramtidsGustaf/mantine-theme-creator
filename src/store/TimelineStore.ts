import { componentSignal } from "./componentSignal";

export enum TimelineProps {
  color,
  radius,
  reverseActive,
  lineWidth,
  bulletSize,
  align,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "radius", value: "xl" },
  { name: "reverseActive", value: false },
  { name: "lineWidth", value: 4 },
  { name: "bulletSize", value: 25 },
  { name: "align", value: "left" },
];

export const timeline = componentSignal(initialValues);
