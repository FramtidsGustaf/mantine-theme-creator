import { MantineColorsTuple } from "@mantine/core";

export type HexColor = string;

export const generateColorScale = (color: HexColor): MantineColorsTuple => {
  const colors: string[] = [];

  const hexToRgb = (hex: string) => {
    const hexCode = hex.replace("#", "");
    const r = parseInt(hexCode.substring(0, 2), 16);
    const g = parseInt(hexCode.substring(2, 4), 16);
    const b = parseInt(hexCode.substring(4, 6), 16);

    return { r, g, b };
  };

  const rgbToHex = (rgb: { r: number; g: number; b: number }): HexColor => {
    const { r, g, b } = rgb;
    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  const adjustColor = (
    color: { r: number; g: number; b: number },
    percent: number
  ) => {
    return {
      r: Math.min(
        255,
        Math.max(0, Math.floor(color.r + (255 - color.r) * percent))
      ),
      g: Math.min(
        255,
        Math.max(0, Math.floor(color.g + (255 - color.g) * percent))
      ),
      b: Math.min(
        255,
        Math.max(0, Math.floor(color.b + (255 - color.b) * percent))
      ),
    };
  };

  const baseColor = hexToRgb(color);

  for (let i = 1; i <= 5; i++) {
    const lightPercent = (5 - i) * 0.2;
    const lightColor = adjustColor(baseColor, lightPercent);
    colors.push(rgbToHex({ ...lightColor }));
  }

  for (let i = 1; i <= 5; i++) {
    const darkPercent = -i * 0.1;
    const darkColor = adjustColor(baseColor, darkPercent);
    colors.push(rgbToHex({ ...darkColor }));
  }

  return colors as unknown as MantineColorsTuple;
};
