import { componentSignal } from "./componentSignal";

export enum SkeletonSignal {
  animate,
}

const initialValues = [{ name: "animate", value: true }];

export const skeleton = componentSignal(initialValues);
