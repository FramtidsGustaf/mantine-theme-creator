import { Box, Pill, Switch } from "@mantine/core";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { pill, PillProps } from "../../../store/ PillStore";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";

const Component = () => {
  return (
    <Box bg="gray.2" px="sm" py="xs">
      <Pill>React</Pill>
    </Box>
  );
};

const Settings = () => {
  return (
    <>
      <SizeAndRadiusSlider
        label="Size"
        value={pill.values[PillProps.size].value}
        onChange={(value) => {
          pill.setValue(PillProps.size, value);
        }}
      />

      <Switch
        mt="xs"
        label="With remove button"
        checked={pill.values[PillProps.withRemoveButton].value}
        onChange={(event) => {
          pill.setValue(
            PillProps.withRemoveButton,
            event.currentTarget.checked
          );
        }}
      />
    </>
  );
};

export const MyPill = () => {
  return (
    <ComponentsWrapper
      label="Pill"
      isDirty={pill.isDirty}
      onReset={pill.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
