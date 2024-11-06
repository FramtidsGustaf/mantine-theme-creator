import {
  AppShell,
  Container,
  Flex,
  MantineProvider,
  Stack,
  Title,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { ColorSection } from "./Components/ColorSection/ColorSection";
import { ComponentsSection } from "./Components/ComponentsSection/ComponentsSection";
import { ColorSchemeToggle } from "./Components/ColorSchemeToggle/ColorSchemeToggle";
import { ThemeObjectOutput } from "./Components/ThemeObjectOutput/ThemeObjectOutput";

import { useMyTheme } from "./hooks/useMyTheme";

function App() {
  const theme = useMyTheme();

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <AppShell header={{ height: 60 }}>
          <AppShell.Main>
            <AppShell.Header>
              <Flex align="center" h="100%" px="md" justify="space-between">
                <Title order={2}>Mantine Theme Creator</Title>
                <ColorSchemeToggle />
              </Flex>
            </AppShell.Header>

            <Container fluid px={{ base: "xs", sm: "xl" }} py="md">
              <Stack gap="lg">
                <ColorSection />
                <ComponentsSection />
                <ThemeObjectOutput />
              </Stack>
            </Container>
          </AppShell.Main>
        </AppShell>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
