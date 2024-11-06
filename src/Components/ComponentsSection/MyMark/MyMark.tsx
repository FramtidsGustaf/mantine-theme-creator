import { Mark, Text } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { MarkProps, mark } from "../../../store/MarkStore";

const Component = () => {
  return (
    <Text>
      Highlight <Mark>this chunk</Mark> of the text
    </Text>
  );
};

const Settings = () => {
  return (
    <ColorSelect
      label="Color"
      value={mark.values[MarkProps.color].value}
      onChange={(value) => {
        mark.setValue(MarkProps.color, value);
      }}
    />
  );
};

export const MyMark = () => {
  return (
    <ComponentsWrapper
      label="Mark"
      isDirty={mark.isDirty}
      onReset={mark.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
