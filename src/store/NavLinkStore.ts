import { componentSignal } from "./componentSignal";

export enum NavlinkProps {
  variant,
  color,
}

const initialValues = [
  { name: "variant", value: "light" },
  { name: "color", value: "primary" },
];

export const navLink = componentSignal(initialValues);
