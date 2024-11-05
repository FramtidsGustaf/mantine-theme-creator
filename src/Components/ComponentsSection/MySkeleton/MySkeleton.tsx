import { Box, Skeleton, Switch } from "@mantine/core";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { skeleton, SkeletonSignal } from "../../../store/SkeletonStore";

const Component = () => {
  return (
    <Box w="100%">
      <Skeleton height={50} circle mb="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
    </Box>
  );
};

const Settings = () => {
  return (
    <Switch
      label="Animate"
      checked={skeleton.values[SkeletonSignal.animate].value}
      onChange={(event) =>
        skeleton.setValue(SkeletonSignal.animate, event.currentTarget.checked)
      }
    />
  );
};

export const MySkeleton = () => {
  return (
    <ComponentsWrapper
      isDirty={skeleton.isDirty}
      label="Skeleton"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
