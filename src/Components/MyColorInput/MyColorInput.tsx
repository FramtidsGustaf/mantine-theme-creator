import { ColorInput, ColorInputProps } from "@mantine/core";
import { Colors, colorTheme } from "../../store/ColorThemeStore";
import { generateColorScale, HexColor } from "../../utils/ colorScale";

interface MyColorInputProps extends ColorInputProps {
  priority: keyof Colors | "white" | "black";
}

export const MyColorInput = ({ priority, ...rest }: MyColorInputProps) => {
  const handleColorChange = (color: string) => {
    if (!color) return;

    if (priority === "white") {
      colorTheme.setWhite(color);
      return;
    }

    if (priority === "black") {
      colorTheme.setBlack(color);
      return;
    }

    const colorScale = generateColorScale(color as HexColor);

    colorTheme.setColor(colorScale, priority);
  };

  let value: HexColor;

  switch (priority) {
    case "white":
      value = colorTheme.white;
      break;
    case "black":
      value = colorTheme.black;
      break;
    default:
      value = colorTheme[priority][4];
  }

  return <ColorInput value={value} {...rest} onChange={handleColorChange} />;
};
