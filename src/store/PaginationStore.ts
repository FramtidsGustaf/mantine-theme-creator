import { componentSignal } from "./componentSignal";

export enum PaginationProps {
  size,
  radius,
  withControls,
  withEdges,
  color,
}

const initialValues = [
  { name: "size", value: "md" },
  { name: "radius", value: "sm" },
  { name: "withControls", value: true },
  { name: "withEdges", value: false },
  { name: "color", value: "primary" },
];

export const pagination = componentSignal(initialValues);
