import { Paper, Switch, Text } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { paper, PaperProps } from "../../../store/PaperStore";

const Component = () => {
  return (
    <Paper p="xl">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that
        require background with shadow
      </Text>
    </Paper>
  );
};

const Settings = () => {
  return (
    <>
      <SizeAndRadiusSlider
        label="Shadow"
        value={paper.values[PaperProps.shadow].value}
        onChange={(value) => {
          paper.setValue(PaperProps.shadow, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={paper.values[PaperProps.radius].value}
        onChange={(value) => {
          paper.setValue(PaperProps.radius, value);
        }}
      />

      <Switch
        mt="xs"
        label="With border"
        checked={paper.values[PaperProps.withBorder].value}
        onChange={(event) => {
          paper.setValue(PaperProps.withBorder, event.currentTarget.checked);
        }}
      />
    </>
  );
};

export const MyPaper = () => {
  return (
    <ComponentsWrapper
      label="Paper"
      isDirty={paper.isDirty}
      onReset={paper.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
