import { AppShell, Container, Flex, MantineProvider } from "@mantine/core";

import { ColorSection } from "./Components/ColorSection/ColorSection";
import { ComponentsSection } from "./Components/ComponentsSection/ComponentsSection";
import { useMyTheme } from "./hooks/useMyTheme";
import { ColorSchemeToggle } from "./Components/ColorSchemeToggle/ColorSchemeToggle";
import { ThemeObjectOutput } from "./Components/ThemeObjectOutput/ThemeObjectOutput";

function App() {
  const theme = useMyTheme();

  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 60 }}>
        <AppShell.Main>
          <AppShell.Header>
            <Flex align="center" h="100%" px="md" justify="flex-end">
              <ColorSchemeToggle />
            </Flex>
          </AppShell.Header>

          <Container fluid px={{ base: "xs", sm: "xl" }} py="md">
            <ColorSection />
            <ComponentsSection />
            <ThemeObjectOutput />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
