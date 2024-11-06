import { componentSignal } from "./componentSignal";

export enum PillProps {
  size,
  withRemoveButton,
}

export const initialValues = [
  {
    name: "size",
    value: "md",
  },
  {
    name: "withRemoveButton",
    value: false,
  },
];

export const pill = componentSignal(initialValues);
