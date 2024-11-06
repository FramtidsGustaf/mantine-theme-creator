import { List, Switch } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ListProps, list } from "../../../store/ListStore";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

const Component = () => {
  return (
    <List>
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>
        Run tests to make sure your changes do not break the build
      </List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
};

const types = [
  {
    label: "Unordered",
    value: "unordered",
  },
  {
    label: "Ordered",
    value: "ordered",
  },
];

const Settings = () => {
  return (
    <>
      <LabeledSegmentedControl
        label="Type"
        data={types}
        value={list.values[ListProps.type].value}
        onChange={(value) => {
          list.setValue(ListProps.type, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Size"
        value={list.values[ListProps.size].value}
        onChange={(value) => {
          list.setValue(ListProps.size, value);
        }}
      />

      <Switch
        mt="xs"
        label="With padding"
        checked={list.values[ListProps.withPadding].value}
        onChange={(event) => {
          list.setValue(ListProps.withPadding, event.currentTarget.checked);
        }}
      />
    </>
  );
};

export const MyList = () => {
  return (
    <ComponentsWrapper
      label="List"
      isDirty={list.isDirty}
      onReset={list.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
