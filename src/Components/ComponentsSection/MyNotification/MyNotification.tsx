import {
  notification,
  NotificationProps,
} from "../../../store/NotificationStore";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { Notification, Stack, Switch } from "@mantine/core";

const Component = () => {
  return (
    <Notification title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
};

const Settings = () => {
  return (
    <>
      <ColorSelect
        label="Color"
        value={notification.values[NotificationProps.color].value}
        onChange={(value) => {
          notification.setValue(NotificationProps.color, value);
        }}
      />
      <SizeAndRadiusSlider
        label="Radius"
        value={notification.values[NotificationProps.radius].value}
        onChange={(value) => {
          notification.setValue(NotificationProps.radius, value);
        }}
      />
      <Stack>
        <Switch
          label="With close button"
          checked={
            notification.values[NotificationProps.withCloseButton].value
          }
          onChange={(event) => {
            notification.setValue(
              NotificationProps.withCloseButton,
              event.target.checked
            );
          }}
        />
        <Switch
          label="With border"
          checked={notification.values[NotificationProps.withBorder].value}
          onChange={(event) => {
            notification.setValue(
              NotificationProps.withBorder,
              event.target.checked
            );
          }}
        />
      </Stack>
    </>
  );
};

export const MyNotification = () => {
  return (
    <ComponentsWrapper
      isDirty={notification.isDirty}
      label="Notification"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
