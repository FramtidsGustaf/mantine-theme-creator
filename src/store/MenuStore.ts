import { componentSignal } from "./componentSignal";

export enum MenuProps {
  position,
  offset,
  withArrow,
  arrowPosition,
}

const initialValues = [
  { name: "position", value: "bottom" },
  { name: "offset", value: 5 },
  { name: "withArrow", value: false },
  { name: "arrowPosition", value: "side" },
];

export const menu = componentSignal(initialValues);
