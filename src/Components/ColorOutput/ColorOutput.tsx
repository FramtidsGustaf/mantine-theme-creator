import { Box, Stack, Text } from "@mantine/core";
import { HexColor, isColorBright } from "../../utils/ colorScale";

interface ColorOutputProps {
  color: HexColor;
  index: number;
}

export const ColorOutput = ({ color, index }: ColorOutputProps) => {
  const textColor = isColorBright(color) ? "black" : "white";

  return (
    <Box key={index} bg={color} h="100" w="100">
      <Stack gap={0} align="center" h="100" justify="center">
        <Text c={textColor}>{index}</Text>
        <Text c={textColor}>{color.toUpperCase()}</Text>
      </Stack>
    </Box>
  );
};
