import {
  Timeline,
  Text,
  Switch,
  Stack,
  Slider,
  SegmentedControl,
} from "@mantine/core";
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from "@tabler/icons-react";
import { ComponentsWrapper } from "../ComponentsWrapper/ComponentsWrapper";
import { ColorSelect } from "../../ColorSelect/ColorSelect";
import { SizeAndRadiusSlider } from "../../SizeAndRadiusSlider/SizeAndRadiusSlider";
import { timeline, TimelineProps } from "../../../store/TimelineStore";

const Component = () => {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text c="dimmed" size="sm">
          You&apos;ve created new branch{" "}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{" "}
          from master
        </Text>
        <Text size="xs" mt={4}>
          2 hours ago
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">
          You&apos;ve pushed 23 commits to
          <Text variant="link" component="span" inherit>
            fix-notifications branch
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          52 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={<IconGitPullRequest size={12} />}
        lineVariant="dashed"
      >
        <Text c="dimmed" size="sm">
          You&apos;ve submitted a pull request
          <Text variant="link" component="span" inherit>
            Fix incorrect notification message (#187)
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          34 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Robert Gluesticker
          </Text>{" "}
          left a code review on your pull request
        </Text>
        <Text size="xs" mt={4}>
          12 minutes ago
        </Text>
      </Timeline.Item>
    </Timeline>
  );
};

const align = [
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
      <ColorSelect
        label="Color"
        value={timeline.values[TimelineProps.color].value}
        onChange={(value) => {
          timeline.setValue(TimelineProps.color, value);
        }}
      />

      <SizeAndRadiusSlider
        label="Radius"
        value={timeline.values[TimelineProps.radius].value}
        onChange={(value) => {
          timeline.setValue(TimelineProps.radius, value);
        }}
      />

      <Switch
        label="Reverse active"
        checked={timeline.values[TimelineProps.reverseActive].value}
        onChange={(event) => {
          timeline.setValue(
            TimelineProps.reverseActive,
            event.currentTarget.checked
          );
        }}
      />

      <Stack gap={0} mt="xs">
        <Text size="sm">Line width</Text>
        <Slider
          min={1}
          max={6}
          value={timeline.values[TimelineProps.lineWidth].value}
          onChange={(value) => {
            timeline.setValue(TimelineProps.lineWidth, value);
          }}
        />
      </Stack>

      <Stack gap={0} mt="xs">
        <Text size="sm">Bullet size</Text>
        <Slider
          min={18}
          max={40}
          value={timeline.values[TimelineProps.bulletSize].value}
          onChange={(value) => {
            timeline.setValue(TimelineProps.bulletSize, value);
          }}
        />
      </Stack>

      <Stack gap={0} mt="xs">
        <Text size="sm">Align</Text>
        <SegmentedControl
          data={align}
          value={timeline.values[TimelineProps.align].value}
          onChange={(value) => {
            timeline.setValue(TimelineProps.align, value);
          }}
        />
      </Stack>
    </>
  );
};

export const MyTimeline = () => {
  return (
    <ComponentsWrapper
      isDirty={timeline.isDirty}
      label="Timeline"
      component={<Component />}
      settings={<Settings />}
    />
  );
};
