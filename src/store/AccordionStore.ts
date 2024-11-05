import { componentSignal } from "./componentSignal";

export enum AccordionProps {
  variant,
  radius,
  chevronPosition,
  disableChevronRotation,
}

const initialValues = [
  {
    name: "variant",
    value: "default",
  },
  {
    name: "radius",
    value: "sm",
  },
  {
    name: "chevronPosition",
    value: "right",
  },
  {
    name: "disableChevronRotation",
    value: false,
  },
];

export const accordion = componentSignal(initialValues);
