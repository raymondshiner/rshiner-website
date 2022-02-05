import { Drawer, TopBar } from "navigation";
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { DrawerStateProvider } from "state";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { pages } from "./pages/pages";
import Section from "./Section";

const App = () => {
  const colors = ["black", "#191919"];

  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <Drawer />
      {pages.map((page, index) => (
        <Section
          id={page.id}
          key={`section-${page.id}`}
          color={colors[index % 2]}
        >
          {page.component}
        </Section>
      ))}
    </ThemeProvider>
  );
};

const AppRouter = () => {
  return (
    <DrawerStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          {/* Redirect all other paths to home */}
          <Route path="*" element={<Navigate to="/#home" />} />
        </Routes>
      </Router>
    </DrawerStateProvider>
  );
};

export default AppRouter;
