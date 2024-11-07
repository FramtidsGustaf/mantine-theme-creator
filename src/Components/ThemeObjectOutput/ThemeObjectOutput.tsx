import { CodeHighlight } from "@mantine/code-highlight";
import { Box, Title } from "@mantine/core";
import { colorTheme } from "../../store/ColorThemeStore";

import { inputs } from "../../store/InputsStore";
import { buttons } from "../../store/ButtonsStore";
import { navLink } from "../../store/NavLinkStore";
import { pagination } from "../../store/PaginationStore";
import { stepper } from "../../store/StepperStore";
import { tabs } from "../../store/TabsStore";
import { alert } from "../../store/AlertStore";
import { loader } from "../../store/LoaderStore";
import { notification } from "../../store/NotificationStore";
import { progress } from "../../store/ProgressStore";
import { ringProgress } from "../../store/RingProgressStore";
import { semiCircleProgress } from "../../store/SemiCircleProgressStore";
import { skeleton } from "../../store/SkeletonStore";
import { menu } from "../../store/MenuStore";
import { tooltip } from "../../store/TooltipStore";
import { accordion } from "../../store/AccordionStore";
import { avatar } from "../../store/AvatarStore";
import { badge } from "../../store/BagdeStore";
import { indicator } from "../../store/IndicatorStore";
import { themeIcon } from "../../store/ThemeIconStore";
import { timeline } from "../../store/TimelineStore";
import { blockquote } from "../../store/BlockquoteStore";
import { highlight } from "../../store/HighlightStore";
import { table } from "../../store/TableStore";
import { paper } from "../../store/PaperStore";
import { list } from "../../store/ListStore";
import { mark } from "../../store/MarkStore";
import { newRadio } from "../../store/RadioStore";
import { segmentedControl } from "../../store/SegmentedControlStore";
import { slider } from "../../store/SliderStore";
import { switchStore } from "../../store/SwitchStore";
import { rating } from "../../store/RatingStore";
import { fieldset } from "../../store/FieldsetStore";
import { checkbox } from "../../store/CheckboxStore";
import { chip } from "../../store/ChipStore";
import { pill } from "../../store/ PillStore";

export const ThemeObjectOutput = () => {
  const renderComponent = (
    name: string,
    store: { defaultPropsAsStr: string; isDirty: boolean }
  ) => {
    if (!store.isDirty) {
      return "";
    }

    const code = `${name}: ${name}.extend({${store.defaultPropsAsStr}
    }),`;

    return code;
  };

  const components = `components: {
    ${renderComponent("Button", buttons)}
    ${renderComponent("ActionIcon", buttons)}
    ${renderComponent("CloseButton", buttons)}
    ${renderComponent("TextInput", inputs)}
    ${renderComponent("ColorInput", inputs)}
    ${renderComponent("FileInput", inputs)}
    ${renderComponent("JsonInput", inputs)}
    ${renderComponent("NativeSelect", inputs)}
    ${renderComponent("NumberInput", inputs)}
    ${renderComponent("PasswordInput", inputs)}
    ${renderComponent("Textarea", inputs)}
    ${renderComponent("PillsInput", inputs)}
    ${renderComponent("Select", inputs)}
    ${renderComponent("MultiSelect", inputs)}
    ${renderComponent("TagsInput", inputs)}
    ${renderComponent("NavLink", navLink)}
    ${renderComponent("Pagination", pagination)}
    ${renderComponent("Stepper", stepper)}
    ${renderComponent("Tabs", tabs)}
    ${renderComponent("Alert", alert)}
    ${renderComponent("Loader", loader)}
    ${renderComponent("Notification", notification)}
    ${renderComponent("Progress", progress)}
    ${renderComponent("RingProgress", ringProgress)}
    ${renderComponent("SemiCircleProgress", semiCircleProgress)}
    ${renderComponent("Skeleton", skeleton)}
    ${renderComponent("Menu", menu)}
    ${renderComponent("Tooltip", tooltip)}
    ${renderComponent("Accordion", accordion)}
    ${renderComponent("Avatar", avatar)}
    ${renderComponent("Badge", badge)}
    ${renderComponent("Indicator", indicator)}
    ${renderComponent("ThemeIcon", themeIcon)}
    ${renderComponent("Timeline", timeline)}
    ${renderComponent("Blockquote", blockquote)}
    ${renderComponent("Highlight", highlight)}
    ${renderComponent("newList", list)}
    ${renderComponent("Mark", mark)}
    ${renderComponent("Table", table)}
    ${renderComponent("Paper", paper)}
    ${renderComponent("Radio", newRadio)}
    ${renderComponent("SegmentedControl", segmentedControl)}
    ${renderComponent("Slider", slider)}
    ${renderComponent("Switch", switchStore)}
    ${renderComponent("Rating", rating)}
    ${renderComponent("Fieldset", fieldset)}
    ${renderComponent("Checkbox", checkbox)}
    ${renderComponent("Chip", chip)}
    ${renderComponent("Pill", pill)}
  },`.replace(/^(?:[\t ]*(?:\r?\n|\r))+/gm, "");

  const imports = `
  import { createTheme${
    buttons.isDirty ? `, Button, ActionIcon, CloseButton` : ""
  }${
    inputs.isDirty
      ? `, TextInput, ColorInput, FileInput, JsonInput, NativeSelect, NumberInput, PasswordInput, Textarea, PillsInput, Select, MultiSelect, TagsInput`
      : ""
  }${navLink.isDirty ? `, NavLink` : ""}${
    pagination.isDirty ? `, Pagination` : ""
  }${stepper.isDirty ? `, Stepper` : ""}${tabs.isDirty ? `, Tabs` : ""}${
    alert.isDirty ? `, Alert` : ""
  }${loader.isDirty ? `, Loader` : ""}${
    notification.isDirty ? `, Notification` : ""
  }${progress.isDirty ? `, Progress` : ""}${
    ringProgress.isDirty ? `, RingProgress` : ""
  }${semiCircleProgress.isDirty ? `, SemiCircleProgress` : ""}${
    skeleton.isDirty ? `, Skeleton` : ""
  }${menu.isDirty ? `, Menu` : ""}${tooltip.isDirty ? `, Tooltip` : ""}${
    accordion.isDirty ? `, Accordion` : ""
  }${avatar.isDirty ? `, Avatar` : ""}${badge.isDirty ? `, Badge` : ""}${
    indicator.isDirty ? `, Indicator` : ""
  }${themeIcon.isDirty ? `, ThemeIcon` : ""}${
    timeline.isDirty ? `, Timeline` : ""
  }${blockquote.isDirty ? `, Blockquote` : ""}${
    highlight.isDirty ? `, Highlight` : ""
  }${list.isDirty ? `, newList` : ""}${mark.isDirty ? `, Mark` : ""}${
    table.isDirty ? `, Table` : ""
  }${paper.isDirty ? `, Paper` : ""}${newRadio.isDirty ? `, Radio` : ""}${
    segmentedControl.isDirty ? `, SegmentedControl` : ""
  }${slider.isDirty ? `, Slider` : ""}${switchStore.isDirty ? `, Switch` : ""}${
    rating.isDirty ? `, Rating` : ""
  }${fieldset.isDirty ? `, Fieldset` : ""}${
    checkbox.isDirty ? `, Checkbox` : ""
  }${chip.isDirty ? `, Chip` : ""}${
    pill.isDirty ? `, Pill` : ""
  } } from "@mantine/core";`;

  const code = `
${imports}
  
export const theme = createTheme({
  colors: {
    primary: ${JSON.stringify(colorTheme.colors.primary)},
    secondary: ${JSON.stringify(colorTheme.colors.secondary)},
    tertiary: ${JSON.stringify(colorTheme.colors.tertiary)},
    quarternary: ${JSON.stringify(colorTheme.colors.quarternary)},
    dark: ${JSON.stringify(colorTheme.colors.dark)},
    gray: ${JSON.stringify(colorTheme.colors.gray)},
  },
  white: "${colorTheme.white}",
  black: "${colorTheme.black}",
  primaryColor: "primary",
  primaryShade: ${colorTheme.primaryShade},
  luminanceThreshold: ${colorTheme.luminanceThreshold},
  ${components}
});`;

  return (
    <Box>
      <Title order={2}>Theme object</Title>
      <CodeHighlight language="ts" code={code} />
    </Box>
  );
};
