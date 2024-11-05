import { componentSignal } from "./componentSignal";

export enum MarkProps {
  color,
}

const initialValues = [{ name: "color", value: null }];

export const mark = componentSignal(initialValues);
