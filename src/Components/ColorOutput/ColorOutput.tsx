import { Box } from "@mantine/core";
import { HexColor } from "../../utils/ colorScale";

interface ColorOutputProps {
  color: HexColor;
  index: number;
}

export const ColorOutput = ({ color, index }: ColorOutputProps) => {
  return (
    <Box
      key={index}
      bg={color}
      h={{ base: 70, sm: 100, md: 100 }}
      w={{ base: 70, sm: 100, md: 100 }}
    />
  );
};
