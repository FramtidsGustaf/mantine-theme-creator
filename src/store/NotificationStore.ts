import { componentSignal } from "./componentSignal";

export enum NotificationProps {
  color,
  radius,
  withCloseButton,
  withBorder,
}

const initialValues = [
  { name: "color", value: "primary" },
  { name: "radius", value: "sm" },
  { name: "withCloseButton", value: true },
  { name: "withBorder", value: false },
];

export const notification = componentSignal(initialValues);
