import { AppShell, Container, MantineProvider, Stack } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { ColorSection } from "./Components/ColorSection/ColorSection";
import { ComponentsSection } from "./Components/ComponentsSection/ComponentsSection";
import { ThemeObjectOutput } from "./Components/ThemeObjectOutput/ThemeObjectOutput";

import { useMyTheme } from "./hooks/useMyTheme";

import { Hero } from "./Components/Hero/Hero";
import { Header } from "./Components/Header/Header";

function App() {
  const theme = useMyTheme();

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <AppShell header={{ height: 60 }}>
          <AppShell.Main>
            <AppShell.Header>
              <Header />
            </AppShell.Header>

            <Container fluid px={{ base: "xs", sm: "xl" }} py="md">
              <Hero />
              <Stack gap="lg" mt="xl">
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
