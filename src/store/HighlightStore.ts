import { componentSignal } from "./componentSignal";

export enum HighlightProps {
  color,
}

const initialValues = [{ name: "color", value: null}];

export const highlight = componentSignal(initialValues);
