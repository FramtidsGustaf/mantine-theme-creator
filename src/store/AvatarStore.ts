import { componentSignal } from "./componentSignal";

export enum AvatarProps {
  variant,
  radius,
  size,
  color,
}

const initialValues = [
  { name: "variant", value: "filled" },
  { name: "radius", value: "xl" },
  { name: "size", value: "md" },
  { name: "color", value: "primary" },
];

export const avatar = componentSignal(initialValues);
