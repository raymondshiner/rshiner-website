import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Redirect all other paths to home */}
        <Route path="*" element={<Navigate to="/#home" />} />
      </Routes>
    </Router>
  );
};

export default App;
