import { Fieldset, SimpleGrid, Stack } from "@mantine/core";
import { MyColorInput } from "../MyColorInput/MyColorInput";
import { ColorScale } from "../ColorsScale/ColorsScale";
import { LuminanceSlider } from "../LuminanceSlider/LuminanceSlider";
import { ShadeSlider } from "../ShadeSlider/ShadeSlider";

export const ColorSection = () => {
  return (
    <Fieldset legend="Theme Colors">
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }}>
        <MyColorInput
          label="Primary Color"
          description="Add a hex color or pick one with the color picker"
          placeholder="Add color"
          priority="primary"
        />

        <MyColorInput
          label="Secondary Color"
          description="Add a hex color or pick one with the color picker"
          placeholder="Add color"
          priority="secondary"
        />

        <MyColorInput
          label="Tertiary Color"
          description="Add a hex color or pick one with the color picker"
          placeholder="Add color"
          priority="tertiary"
        />

        <MyColorInput
          label="Quarternary Color"
          description="Add a hex color or pick one with the color picker"
          placeholder="Add color"
          priority="quarternary"
        />

        <MyColorInput
          label="Dark Color"
          description="Add a hex color or pick one with the color picker"
          placeholder="Add color"
          priority="dark"
        />

        <MyColorInput
          label="White Color"
          description="Add a hex color or pick one with the color picker"
          placeholder="Add color"
          priority="white"
        />

        <MyColorInput
          label="Black Color"
          description="Add a hex color or pick one with the color picker"
          placeholder="Add color"
          priority="black"
        />

        <MyColorInput
          label="Gray Color"
          description="Add a hex color or pick one with the color picker"
          placeholder="Add color"
          priority="gray"
        />

        <LuminanceSlider />
        <ShadeSlider />
      </SimpleGrid>
      <Stack mt="lg" gap="xs" align="center" w="100%">
        <ColorScale priority="primary" />
        <ColorScale priority="secondary" />
        <ColorScale priority="tertiary" />
        <ColorScale priority="quarternary" />
        <ColorScale priority="dark" />
        <ColorScale priority="gray" />
      </Stack>
    </Fieldset>
  );
};
