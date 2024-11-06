import {
  TextInput,
  ColorInput,
  FileInput,
  JsonInput,
  NativeSelect,
  NumberInput,
  PasswordInput,
  Textarea,
  PillsInput,
  Select,
  MultiSelect,
  TagsInput,
  Button,
  ActionIcon,
  CloseButton,
  createTheme,
  NavLink,
  Pagination,
  Stepper,
  Tabs,
  Alert,
  Loader,
  Notification,
  Progress,
  RingProgress,
  SemiCircleProgress,
  Skeleton,
  Menu,
  Tooltip,
  Accordion,
  Avatar,
  Badge,
  Indicator,
  ThemeIcon,
  Timeline,
  Blockquote,
  Highlight,
  List,
  Mark,
  Table,
  Paper,
  Radio,
  SegmentedControl,
  Slider,
  Switch,
  Rating,
  Fieldset,
  Checkbox,
  Chip,
} from "@mantine/core";
import { useSignals } from "@preact/signals-react/runtime";

import { buttons } from "../store/ButtonsStore";
import { colorTheme } from "../store/ColorThemeStore";
import { inputs } from "../store/InputsStore";
import { navLink } from "../store/NavLinkStore";
import { pagination } from "../store/PaginationStore";
import { stepper } from "../store/StepperStore";
import { tabs } from "../store/TabsStore";
import { alert } from "../store/AlertStore";
import { newLoader } from "../store/LoaderStore";
import { notification } from "../store/NotificationStore";
import { progress } from "../store/ProgressStore";
import { ringProgress } from "../store/RingProgressStore";
import { semiCircleProgress } from "../store/SemiCircleProgressStore";
import { skeleton } from "../store/SkeletonStore";
import { menu } from "../store/MenuStore";
import { tooltip } from "../store/TooltipStore";
import { accordion } from "../store/AccordionStore";
import { avatar } from "../store/AvatarStore";
import { badge } from "../store/BagdeStore";
import { indicator } from "../store/IndicatorStore";
import { themeIcon } from "../store/ThemeIconStore";
import { timeline } from "../store/TimelineStore";
import { blockquote } from "../store/BlockquoteStore";
import { highlight } from "../store/HighlightStore";
import { list } from "../store/ListStore";
import { mark } from "../store/MarkStore";
import { table } from "../store/TableStore";
import { paper } from "../store/PaperStore";
import { newRadio } from "../store/RadioStore";
import { segmentedControl } from "../store/SegmentedControlStore";
import { slider } from "../store/SliderStore";
import { switchStore } from "../store/SwitchStore";
import { rating } from "../store/RatingStore";
import { fieldset } from "../store/FieldsetStore";
import { checkbox } from "../store/CheckboxStore";
import { chip } from "../store/ChipStore";

const mntInputs = {
  TextInput,
  ColorInput,
  FileInput,
  JsonInput,
  NativeSelect,
  NumberInput,
  PasswordInput,
  Textarea,
  PillsInput,
  Select,
  MultiSelect,
  TagsInput,
};

const mntButtons = {
  Button,
  ActionIcon,
  CloseButton,
};

export const useMyTheme = () => {
  useSignals();
  let extendedInputs: { [key: string]: any } = {};
  let extendedButtons: { [key: string]: any } = {};

  for (const [key, value] of Object.entries(mntInputs)) {
    extendedInputs[key] = value.extend({
      defaultProps: inputs.getDefaultProps,
    });
  }

  for (const [key, value] of Object.entries(mntButtons)) {
    extendedButtons[key] = value.extend({
      defaultProps: buttons.getDefaultProps,
    });
  }

  const customTheme = createTheme({
    colors: {
      primary: colorTheme.primary,
      secondary: colorTheme.secondary,
      tertiary: colorTheme.tertiary,
      quarternary: colorTheme.quarternary,
      dark: colorTheme.dark,
      gray: colorTheme.gray,
    },
    white: colorTheme.white,
    black: colorTheme.black,
    primaryColor: "primary",
    primaryShade: colorTheme.primaryShade,
    luminanceThreshold: colorTheme.luminanceThreshold,
    components: {
      ...extendedButtons,
      ...extendedInputs,
      NavLink: NavLink.extend({
        defaultProps: navLink.getDefaultProps,
      }),
      Pagination: Pagination.extend({
        defaultProps: pagination.getDefaultProps,
      }),
      Stepper: Stepper.extend({
        defaultProps: stepper.getDefaultProps,
      }),
      Tabs: Tabs.extend({
        defaultProps: tabs.getDefaultProps,
      }),
      Alert: Alert.extend({
        defaultProps: alert.getDefaultProps,
      }),
      Loader: Loader.extend({
        defaultProps: newLoader.getDefaultProps,
      }),
      Notification: Notification.extend({
        defaultProps: notification.getDefaultProps,
      }),
      Progress: Progress.extend({
        defaultProps: progress.getDefaultProps,
      }),
      RingProgress: RingProgress.extend({
        defaultProps: ringProgress.getDefaultProps,
      }),
      SemiCircleProgress: SemiCircleProgress.extend({
        defaultProps: semiCircleProgress.getDefaultProps,
      }),
      Skeleton: Skeleton.extend({
        defaultProps: skeleton.getDefaultProps,
      }),
      Menu: Menu.extend({
        defaultProps: menu.getDefaultProps,
      }),
      Tooltip: Tooltip.extend({
        defaultProps: tooltip.getDefaultProps,
      }),
      Accordion: Accordion.extend({
        defaultProps: accordion.getDefaultProps,
      }),
      Avatar: Avatar.extend({
        defaultProps: avatar.getDefaultProps,
      }),
      Badge: Badge.extend({
        defaultProps: badge.getDefaultProps,
      }),
      Indicator: Indicator.extend({
        defaultProps: indicator.getDefaultProps,
      }),
      ThemeIcon: ThemeIcon.extend({
        defaultProps: themeIcon.getDefaultProps,
      }),
      Timeline: Timeline.extend({
        defaultProps: timeline.getDefaultProps,
      }),
      Blockquote: Blockquote.extend({
        defaultProps: blockquote.getDefaultProps,
      }),
      Highlight: Highlight.extend({
        defaultProps: highlight.getDefaultProps,
      }),
      List: List.extend({
        defaultProps: list.getDefaultProps,
      }),
      Mark: Mark.extend({
        defaultProps: mark.getDefaultProps,
      }),
      Table: Table.extend({
        defaultProps: table.getDefaultProps,
      }),
      Paper: Paper.extend({
        defaultProps: paper.getDefaultProps,
      }),
      Radio: Radio.extend({
        defaultProps: newRadio.getDefaultProps,
      }),
      SegmentedControl: SegmentedControl.extend({
        defaultProps: segmentedControl.getDefaultProps,
      }),
      Slider: Slider.extend({
        defaultProps: slider.getDefaultProps,
      }),
      Switch: Switch.extend({
        defaultProps: switchStore.getDefaultProps,
      }),
      Rating: Rating.extend({
        defaultProps: rating.getDefaultProps,
      }),
      Fieldset: Fieldset.extend({
        defaultProps: fieldset.getDefaultProps,
      }),
      Checkbox: Checkbox.extend({
        defaultProps: checkbox.getDefaultProps,
      }),
      Chip: Chip.extend({
        defaultProps: chip.getDefaultProps,
      }),
    },
  });

  return customTheme;
};
