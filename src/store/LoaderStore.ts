import { componentSignal } from "./componentSignal";

export enum LoaderProps {
  color,
  size,
  type,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "size", value: "md" },
  { name: "type", value: "oval" },
];

export const loader = componentSignal(initialValues);
