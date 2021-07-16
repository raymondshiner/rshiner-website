import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { DrawerStateProvider } from "state";
import Main from "./Main";

const App = () => {
  return (
    <DrawerStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* Redirect all other paths to home */}
          <Route path="*" element={<Navigate to="/#home" />} />
        </Routes>
      </Router>
    </DrawerStateProvider>
  );
};

export default App;
