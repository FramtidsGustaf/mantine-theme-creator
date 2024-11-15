import { componentSignal } from "./componentSignal";

export enum AngleSliderProps {
  size,
  thumbSize,
  withLabel,
}

const initialValues = [
  {
    name: "size",
    value: 60,
  },
  {
    name: "thumbSize",
    value: 8,
  },
  {
    name: "withLabel",
    value: true,
  },
];

export const angleSlider = componentSignal(initialValues);
