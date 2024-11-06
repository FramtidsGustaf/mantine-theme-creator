import { Alert, Select, Switch } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { IconInfoCircle } from "@tabler/icons-react";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { AlertProps, alert } from "../../../store/AlertStore";
import { useSignals } from "@preact/signals-react/runtime";

const Component = () => {
  useSignals();
  const icon = <IconInfoCircle />;
  return (
    <Alert title="Alert title" icon={icon}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis,
      quae tempore necessitatibus placeat saepe.
    </Alert>
  );
};

const variants = [
  {
    label: "Filled",
    value: "filled",
  },
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Outline",
    value: "outline",
  },
  {
    label: "Transparent",
    value: "transparent",
  },
  {
    label: "White",
    value: "white",
  },
  {
    label: "Default",
    value: "default",
  },
];

const Settings = () => {
  return (
    <>
      <Select
        label="Variant"
        data={variants}
        value={alert.values[AlertProps.variant].value}
        onChange={(value) => alert.setValue(AlertProps.variant, value)}
      />

      <ColorSelect
        label="Color"
        value={alert.values[AlertProps.color].value}
        onChange={(value) => {
          alert.setValue(AlertProps.color, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={alert.values[AlertProps.radius].value}
        onChange={(value) => {
          alert.setValue(AlertProps.radius, value);
        }}
      />

      <Switch
        mt="xs"
        label="With close button"
        checked={alert.values[AlertProps.withCloseButton].value}
        onChange={(event) =>
          alert.setValue(
            AlertProps.withCloseButton,
            event.currentTarget.checked
          )
        }
      />
    </>
  );
};

export const MyAlert = () => {
  return (
    <ComponentsWrapper
      label="Alert"
      isDirty={alert.isDirty}
      onReset={alert.reset}
      component={<Component />}
      settings={<Settings />}
    />
  );
};
