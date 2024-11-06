import { Box, SimpleGrid, Title } from "@mantine/core";
import { Inputs } from "./Inputs/Inputs";
import { Buttons } from "./Buttons/Buttons";
import { MyNavLink } from "./MyNavLink/MyNavLink";
import { MyPagination } from "./MyPagination/MyPagination";
import { MyStepper } from "./MyStepper/MyStepper";
import { MyTabs } from "./MyTabs/MyTabs";
import { MyAlert } from "./MyAlert/MyAlert";
import { MyLoader } from "./MyLoader/MyLoader";
import { MyNotification } from "./MyNotification/MyNotification";
import { MyProgress } from "./MyProgress/MyProgress";
import { MyRingProgress } from "./MyRingProgress/MyRingProgress";
import { MySemiCircleProgress } from "./MySemiCircleProgress/MySemiCircleProgress";
import { MySkeleton } from "./MySkeleton/MySkeleton";
import { MyMenu } from "./MyMenu/MyMenu";
import { MyToolTip } from "./MyToolTip/MyToolTip";
import { MyAccordion } from "./MyAccordion/MyAccordion";
import { MyAvatar } from "./MyAvatar/MyAvatar";
import { MyBadge } from "./MyBadge/MyBadge";
import { MyIndicator } from "./MyIndicator/MyIndicator";
import { MyThemeIcon } from "./MyThemeIcon/MyThemeIcon";
import { MyTimeline } from "./MyTimeline/MyTimeline";
import { MyBlockquote } from "./MyBlockquote/MyBlockquote";
import { MyHighlight } from "./MyHighlight/MyHighlight";
import { MyList } from "./MyList/MyList";
import { MyMark } from "./MyMark/MyMark";
import { MyTable } from "./MyTable/MyTable";
import { MyPaper } from "./MyPaper/MyPaper";
import { MyRadio } from "./MyRadio/MyRadio";
import { MySegmentedControl } from "./MySegmentedControl/MySegmentedControl";
import { MySlider } from "./MySlider/MySlider";
import { MySwitch } from "./MySwitch/MySwitch";
import { MyRating } from "./MyRating/MyRating";
import { MyFieldset } from "./MyFieldset/MyFieldset";
import { MyCheckbox } from "./MyCheckbox/MyCheckbox";
import { MyChip } from "./MyChip/MyChip";
import { MyPill } from "./MyPill/MyPill";

export const ComponentsSection = () => {
  return (
    <Box>
      <Title order={2}>Components</Title>
      <SimpleGrid cols={{ base: 1, xl: 2 }} spacing="xs">
        <MyCheckbox />
        <MyChip />
        <MyFieldset />
        <Inputs />
        <MyRadio />
        <MyRating />
        <MySegmentedControl />
        <MySlider />
        <MySwitch />
        <MyPill />
        <Buttons />
        <MyNavLink />
        <MyPagination />
        <MyStepper />
        <MyTabs />
        <MyAlert />
        <MyLoader />
        <MyNotification />
        <MyProgress />
        <MyRingProgress />
        <MySemiCircleProgress />
        <MySkeleton />
        <MyMenu />
        <MyToolTip />
        <MyAccordion />
        <MyAvatar />
        <MyBadge />
        <MyIndicator />
        <MyThemeIcon />
        <MyTimeline />
        <MyBlockquote />
        <MyHighlight />
        <MyList />
        <MyMark />
        <MyTable />
        <MyPaper />
      </SimpleGrid>
    </Box>
  );
};
