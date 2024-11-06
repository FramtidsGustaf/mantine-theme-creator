import { Button, Select, Switch, Tooltip } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { tooltip, TooltipProps } from "../../../store/TooltipStore";

const Component = () => {
  return (
    <Tooltip label="Tooltip" opened>
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
};

const positions = [
  {
    label: "Top",
    value: "top",
  },
  {
    label: "Top-start",
    value: "top-start",
  },
  {
    label: "Top-end",
    value: "top-end",
  },
  {
    label: "Left",
    value: "left",
  },
  {
    label: "Left-start",
    value: "left-start",
  },
  {
    label: "Left-end",
    value: "left-end",
  },
  {
    label: "Right",
    value: "right",
  },
  {
    label: "Right-start",
    value: "right-start",
  },
  {
    label: "Right-end",
    value: "right-end",
  },
  {
    label: "Bottom",
    value: "bottom",
  },
  {
    label: "Bottom-start",
    value: "bottom-start",
  },
  {
    label: "Bottom-end",
    value: "bottom-end",
  },
];

const Settings = () => {
  return (
    <>
      <Select
        data={positions}
        label="Position"
        value={tooltip.values[TooltipProps.position].value}
        onChange={(value) => {
          tooltip.setValue(TooltipProps.position, value);
        }}
      />
      <Switch
        mt="xs"
        label="With arrow"
        checked={tooltip.values[TooltipProps.withArrow].value}
        onChange={(event) => {
          tooltip.setValue(TooltipProps.withArrow, event.currentTarget.checked);
        }}
      />
    </>
  );
};

export const MyToolTip = () => {
  return (
    <ComponentsWrapper
      label="Tooltip"
      isDirty={tooltip.isDirty}
      onReset={tooltip.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
