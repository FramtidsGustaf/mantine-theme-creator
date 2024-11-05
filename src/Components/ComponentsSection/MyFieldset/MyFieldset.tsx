import {
  Fieldset,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { fieldset, FieldsetProps } from "../../../store/FieldsetStore";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";

const Component = () => {
  return (
    <Fieldset legend="Personal information">
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
};

const Settings = () => {
  return (
    <>
      <Stack gap={0}>
        <Text size="sm">Variant</Text>
        <SegmentedControl
          fullWidth
          data={[
            { value: "default", label: "Default" },
            { value: "filled", label: "Filled" },
            {
              value: "unstyled",
              label: "Unstyled",
            },
          ]}
          value={fieldset.values[FieldsetProps.variant].value}
          onChange={(value) => fieldset.setValue(FieldsetProps.variant, value)}
        />
      </Stack>
      <SizeAndRadiusSlider
        label="Radius"
        value={fieldset.values[FieldsetProps.radius].value}
        onChange={(value) => fieldset.setValue(FieldsetProps.radius, value)}
      />
    </>
  );
};

export const MyFieldset = () => {
  return (
    <ComponentsWrapper
      label="Fieldset"
      component={<Component />}
      settings={<Settings />}
      isDirty={fieldset.isDirty}
    />
  );
};
