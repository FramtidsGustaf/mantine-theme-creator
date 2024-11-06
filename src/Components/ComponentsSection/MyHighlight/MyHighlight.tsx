import { Highlight } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { HighlightProps, highlight } from "../../../store/HighlightStore";

const Component = () => {
  return (
    <Highlight highlight="this">
      Highlight This, definitely THIS and also this!
    </Highlight>
  );
};

const Settings = () => {
  return (
    <ColorSelect
      label="Color"
      value={highlight.values[HighlightProps.color].value}
      onChange={(value) => {
        highlight.setValue(HighlightProps.color, value);
      }}
    />
  );
};

export const MyHighlight = () => {
  return (
    <ComponentsWrapper
      label="Highlight"
      isDirty={highlight.isDirty}
      onReset={highlight.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
