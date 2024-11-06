import { Accordion, Select, Switch } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { AccordionProps, accordion } from "../../../store/AccordionStore";
import { LabeledSegmentedControl } from "../../LabeledSegmentedControl/LabeledSegmentedControl";

const groceries = [
  {
    emoji: "🍎",
    value: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    emoji: "🍌",
    value: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "🥦",
    value: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

const Component = () => {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion w="100%" defaultValue="Apples">
      {items}
    </Accordion>
  );
};

const variants = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Contained",
    value: "contained",
  },
  {
    label: "Filled",
    value: "filled",
  },
  {
    label: "Separated",
    value: "separated",
  },
];

const chevronPositions = [
  {
    label: "Left",
    value: "left",
  },
  {
    label: "Right",
    value: "right",
  },
];

const Settings = () => {
  return (
    <>
      <Select
        data={variants}
        label="Variant"
        value={accordion.values[AccordionProps.variant].value}
        onChange={(value) => accordion.setValue(AccordionProps.variant, value)}
        allowDeselect={false}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={accordion.values[AccordionProps.radius].value}
        onChange={(value) => {
          accordion.setValue(AccordionProps.radius, value);
        }}
      />

      <LabeledSegmentedControl
        label="Chevron position"
        data={chevronPositions}
        value={accordion.values[AccordionProps.chevronPosition].value}
        onChange={(value) =>
          accordion.setValue(AccordionProps.chevronPosition, value)
        }
      />

      <Switch
        mt="sm"
        label="Disable chevron rotation"
        checked={accordion.values[AccordionProps.disableChevronRotation].value}
        onChange={(event) =>
          accordion.setValue(
            AccordionProps.disableChevronRotation,
            event.currentTarget.checked
          )
        }
      />
    </>
  );
};

export const MyAccordion = () => {
  return (
    <ComponentsWrapper
      label="Accordion"
      isDirty={accordion.isDirty}
      onReset={accordion.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
