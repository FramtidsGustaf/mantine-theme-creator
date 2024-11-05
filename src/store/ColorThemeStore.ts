import type {
  MantineColorShade,
  MantineColorsTuple,
  MantinePrimaryShade,
} from "@mantine/core";
import { DeepSignal, deepSignal } from "deepsignal";

export interface Colors {
  primary: MantineColorsTuple;
  secondary: MantineColorsTuple;
  tertiary: MantineColorsTuple;
  quarternary: MantineColorsTuple;
  dark: MantineColorsTuple;
  gray: MantineColorsTuple;
}

export interface ColorsWithWhiteAndBlack extends Colors {
  white: string;
  black: string;
}

interface Theme {
  colors: Colors;
  white: string;
  black: string;
  primaryShade: MantineColorShade | MantinePrimaryShade;
  luminanceThreshold: number;
  setColor: (color: MantineColorsTuple, priority: keyof Colors) => void;
  setWhite: (color: string) => void;
  setBlack: (color: string) => void;
  setPrimaryShade: (shade: MantineColorShade | MantinePrimaryShade) => void;
  setLuminanceThreshold: (value: number) => void;
  primary: MantineColorsTuple;
  secondary: MantineColorsTuple;
  tertiary: MantineColorsTuple;
  quarternary: MantineColorsTuple;
  dark: MantineColorsTuple;
  gray: MantineColorsTuple;
}

export const colorTheme: DeepSignal<Theme> = deepSignal({
  colors: {
    primary: [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ] as MantineColorsTuple,
    secondary: [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ] as MantineColorsTuple,
    tertiary: [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ] as MantineColorsTuple,
    quarternary: [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ] as MantineColorsTuple,
    dark: [
      "#c9c9c9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414",
    ] as MantineColorsTuple,
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ] as MantineColorsTuple,
  },

  white: "#ffffff",
  black: "#000000",

  primaryShade: 4,
  luminanceThreshold: 0.3,

  setColor: (color, priority) => {
    colorTheme.colors[priority] = color;
  },

  setWhite(color) {
    colorTheme.white = color;
  },

  setBlack(color) {
    colorTheme.black = color;
  },

  setPrimaryShade(shade) {
    colorTheme.primaryShade = shade;
  },

  setLuminanceThreshold(value) {
    colorTheme.luminanceThreshold = value;
  },

  get primary() {
    return colorTheme.colors.primary as MantineColorsTuple;
  },

  get secondary() {
    return colorTheme.colors.secondary as MantineColorsTuple;
  },

  get tertiary() {
    return colorTheme.colors.tertiary as MantineColorsTuple;
  },

  get quarternary() {
    return colorTheme.colors.quarternary as MantineColorsTuple;
  },

  get dark() {
    return colorTheme.colors.dark as MantineColorsTuple;
  },

  get gray() {
    return colorTheme.colors.gray as MantineColorsTuple;
  },
});
