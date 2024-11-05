import { useState } from "react";
import { Box, NavLink, SegmentedControl, Stack, Text } from "@mantine/core";
import {
  IconActivity,
  IconChevronRight,
  IconFingerprint,
  IconGauge,
} from "@tabler/icons-react";
import { NavlinkProps, navLink } from "../../../store/NavLinkStore";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";

const data = [
  {
    icon: IconGauge,
    label: "DashBoard",
    description: "Item with description",
  },
  {
    icon: IconFingerprint,
    label: "Security",
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  {
    icon: IconActivity,
    label: "Activity",
  },
];

const variants = [
  {
    label: "Subtle",
    value: "subtle",
  },
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Filled",
    value: "filled",
  },
];

export const MyNavLink = () => {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <>
      <ComponentsWrapper
        isDirty={navLink.isDirty}
        label="NavLink"
        component={<Box w={200}>{items}</Box>}
        settings={
          <Stack gap="md">
            <ColorSelect
              label="Color"
              value={navLink.values[NavlinkProps.color].value}
              onChange={(value) => {
                navLink.setValue(NavlinkProps.color, value);
              }}
            />
            <Stack gap={0}>
              <Text fz="sm">Variant</Text>
              <SegmentedControl
                data={variants}
                value={navLink.values[NavlinkProps.variant].value}
                onChange={(value) => {
                  navLink.setValue(NavlinkProps.variant, value);
                }}
              />
            </Stack>
          </Stack>
        }
      />
    </>
  );
};
