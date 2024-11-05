import { componentSignal } from "./componentSignal";

export enum RingProgressProps {
  thickness,
  roundCaps,
}

export const initialValues = [
  { name: "thickness", value: 12 },
  { name: "roundCaps", value: false },
];

export const ringProgress = componentSignal(initialValues);
