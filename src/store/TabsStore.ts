import { componentSignal } from "./componentSignal";

export enum TabsProps {
  color,
  variant,
  radius,
  orientation,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "variant", value: "default" },
  { name: "radius", value: "sm" },
  { name: "orientation", value: "horizontal" },
];

export const tabs = componentSignal(initialValues);
