import { componentSignal } from "./componentSignal";

export enum TableProps {
  horizontalSpacing,
  verticalSpacing,
  stickyHeader,
  striped,
  highlightOnHover,
  withTableBorder,
  withColumnBorders,
  withRowBorders,
}

const initialValues = [
  { name: "horizontalSpacing", value: "xs" },
  { name: "verticalSpacing", value: "xs" },
  { name: "stickyHeader", value: false },
  { name: "striped", value: false },
  { name: "highlightOnHover", value: false },
  { name: "withTableBorder", value: false },
  { name: "withColumnBorders", value: false },
  { name: "withRowBorders", value: true },
];

export const table = componentSignal(initialValues);
