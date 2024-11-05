import { componentSignal } from "./componentSignal";

export enum IndicatorProps {
  color,
  size,
  radius,
  position,
  withBorder,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "size", value: 10 },
  { name: "radius", value: "xl" },
  { name: "position", value: "top-end" },
  { name: "withBorder", value: false },
];

export const indicator = componentSignal(initialValues);
