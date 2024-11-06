import {
  SegmentedControl,
  SegmentedControlProps,
  Stack,
  Text,
} from "@mantine/core";

interface LabeledSegmentedControlProps extends SegmentedControlProps {
  label: string;
}

export const LabeledSegmentedControl = ({
  label,
  ...rest
}: LabeledSegmentedControlProps) => {
  return (
    <Stack gap={0} mt={3}>
      <Text fz="sm">{label}</Text>
      <SegmentedControl {...rest} />
    </Stack>
  );
};
