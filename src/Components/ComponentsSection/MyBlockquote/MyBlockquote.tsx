import { Blockquote, Slider, Stack, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { BlockquoteProps, blockquote } from "../../../store/BlockquoteStore";

const Component = () => {
  const icon = <IconInfoCircle />;
  return (
    <Blockquote cite="– Forrest Gump" icon={icon}>
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
};

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={blockquote.values[BlockquoteProps.color].value}
        onChange={(value) => {
          blockquote.setValue(BlockquoteProps.color, value);
        }}
      />
      <SizeAndRadiusSlider
        label="Radius"
        value={blockquote.values[BlockquoteProps.radius].value}
        onChange={(value) => {
          blockquote.setValue(BlockquoteProps.radius, value);
        }}
      />
      <Stack gap={0}>
        <Text size="sm">Icon size</Text>
        <Slider
          min={30}
          max={60}
          value={blockquote.values[BlockquoteProps.iconSize].value}
          onChange={(value) => {
            blockquote.setValue(BlockquoteProps.iconSize, value);
          }}
        />
      </Stack>
    </>
  );
};

export const MyBlockquote = () => {
  return (
    <ComponentsWrapper
      isDirty={blockquote.isDirty}
      label="Blockquote"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
