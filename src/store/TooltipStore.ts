import { componentSignal } from "./componentSignal";

export enum TooltipProps {
  position,
  withArrow,
}

const initialValues = [
  { name: "position", value: "top" },
  { name: "withArrow", value: false },
];

export const tooltip = componentSignal(initialValues);
