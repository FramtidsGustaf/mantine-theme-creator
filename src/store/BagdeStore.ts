import { componentSignal } from "./componentSignal";

export enum BadgeProps {
  variant,
  color,
  size,
  radius,
}

const initialValues = [
  { name: "variant", value: "filled" },
  { name: "color", value: "primary" },
  { name: "size", value: "md" },
  { name: "radius", value: "xl" },
];

export const badge = componentSignal(initialValues);
