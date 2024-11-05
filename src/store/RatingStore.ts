import { componentSignal } from "./componentSignal";

export enum RatingProps {
  color,
  size,
  count,
  highlightSelectedOnly,
}

const initialValues = [
  { name: "color", value: null },
  { name: "size", value: "md" },
  { name: "count", value: 5 },
  { name: "highlightSelectedOnly", value: false },
];

export const rating = componentSignal(initialValues);
