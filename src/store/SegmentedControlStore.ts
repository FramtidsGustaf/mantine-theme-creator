import { componentSignal } from "./componentSignal";

export enum SegmentedControlProps {
  orientation,
  fullWidth,
  withItemsBorders,
  size,
  radius,
  color,
}

const initialValues = [
  { name: "orientation", value: "horizontal" },
  { name: "fullWidth", value: false },
  { name: "withItemsBorders", value: true },
  { name: "size", value: "sm" },
  { name: "radius", value: "sm" },
  { name: "color", value: null },
];

export const segmentedControl = componentSignal(initialValues);
