import React, { useState } from "react";

const DrawerStateContext = React.createContext();

const DrawerStateProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <DrawerStateContext.Provider value={{ drawerOpen, setDrawerOpen }}>
      {children}
    </DrawerStateContext.Provider>
  );
};

const useDrawerState = () => {
  const context = React.useContext(DrawerStateContext);
  if (context === undefined) {
    throw new Error("useDrawerState must be used within a DrawerStateContext");
  }
  return context;
};

export { useDrawerState, DrawerStateProvider };
