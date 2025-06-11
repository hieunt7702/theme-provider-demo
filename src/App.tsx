import React from "react";
import { ThemeProvider, useTheme } from "./theme-context";
import { DrawingProvider } from "./contexts/DrawingContext";
import { Navbar } from "./components/Navbar";
import Button from "./components/Button";
import { ButtonBorder } from "./components/ButtonBorder";
import Drawing from "./Drawing";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as any)}
      className="p-2 border rounded mb-4"
    >
      <option value="default">Default</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="children">Children</option>
    </select>
  );
};





const AppContent = () => {
  const { config } = useTheme();

  return (
    <div className={`${config.global} min-h-screen p-6 `}>
      <ThemeSelector />
      <Navbar />
      <div className="mt-6 space-x-4">
        <Button children="Xác nhận" />
        <ButtonBorder /> 
      </div>
      <Drawing />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <DrawingProvider>
        <AppContent />
      </DrawingProvider>
    </ThemeProvider>
  );
};

export default App;
