import { SimpleGrid, Stack, Title } from "@mantine/core";
import { Colors, colorTheme } from "../../store/ColorThemeStore";
import { ColorOutput } from "../ColorOutput/ColorOutput";

interface ColorScaleProps {
  priority: keyof Colors;
}

export const ColorScale = ({ priority }: ColorScaleProps) => {
  const colorOutputs = () => {
    const a = new Array(10).fill(0);

    return a.map((_, index) => (
      <ColorOutput
        key={index}
        color={colorTheme[priority][index]}
        index={index}
      />
    ));
  };

  return colorTheme ? (
    <Stack gap={0}>
      <Title order={6} fw="normal">
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </Title>
      <SimpleGrid spacing={0} cols={{ base: 5, md: 10 }}>
        {colorOutputs()}
      </SimpleGrid>
    </Stack>
  ) : null;
};
