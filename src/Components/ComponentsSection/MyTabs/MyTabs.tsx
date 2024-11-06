import { rem, Tabs } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { tabs, TabsProps } from "../../../store/TabsStore";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

const Component = () => {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle style={iconStyle} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="settings"
          leftSection={<IconSettings style={iconStyle} />}
        >
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
};

const variants = [
  { label: "Default", value: "default" },
  { label: "Outline", value: "outline" },
  { label: "Pills", value: "pills" },
];

const orientations = [
  { label: "Horizontal", value: "horizontal" },
  { label: "Vertical", value: "vertical" },
];

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={tabs.values[TabsProps.color].value}
        onChange={(value) => {
          tabs.setValue(TabsProps.color, value);
        }}
      />

      <LabeledSegmentedControl
        label="Variant"
        data={variants}
        value={tabs.values[TabsProps.variant].value}
        onChange={(value) => {
          tabs.setValue(TabsProps.variant, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={tabs.values[TabsProps.radius].value}
        onChange={(value) => {
          tabs.setValue(TabsProps.radius, value);
        }}
      />

      <LabeledSegmentedControl
        label="Orientation"
        data={orientations}
        value={tabs.values[TabsProps.orientation].value}
        onChange={(value) => {
          tabs.setValue(TabsProps.orientation, value);
        }}
      />
    </>
  );
};

export const MyTabs = () => {
  return (
    <ComponentsWrapper
      label="Tabs"
      isDirty={tabs.isDirty}
      onReset={tabs.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
