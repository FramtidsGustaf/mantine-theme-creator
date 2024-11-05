import { componentSignal } from "./componentSignal";

export enum ThemeIconProps {
  variant,
  radius,
  size,
  color,
}

const initialValues = [
  { name: "variant", value: "filled" },
  { name: "radius", value: "sm" },
  { name: "size", value: "md" },
  { name: "color", value: "primary" },
];

export const themeIcon = componentSignal(initialValues);
