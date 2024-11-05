import { componentSignal } from "./componentSignal";

export enum SliderProps {
  color,
  size,
  radius,
  showLabelOnHover,
  labelAlwaysOn,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "size", value: "md" },
  { name: "radius", value: "xl" },
  { name: "showLabelOnHover", value: true },
  { name: "labelAlwaysOn", value: false },
];

export const slider = componentSignal(initialValues);
