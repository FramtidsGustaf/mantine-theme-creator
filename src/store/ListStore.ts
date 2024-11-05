import { componentSignal } from "./componentSignal";

export enum ListProps {
  type,
  size,
  withPadding,
}

const initialValues = [
  { name: "type", value: "unordered" },
  { name: "size", value: "md" },
  { name: "withPadding", value: false },
];

export const list = componentSignal(initialValues);
