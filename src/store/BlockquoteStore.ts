import { componentSignal } from "./componentSignal";

export enum BlockquoteProps {
  color,
  radius,
  iconSize,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "radius", value: "sm" },
  { name: "iconSize", value: 48 },
];

export const blockquote = componentSignal(initialValues);
