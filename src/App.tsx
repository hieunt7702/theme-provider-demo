import { ThemeProvider, useTheme } from "./contexts/theme-context";
import { DrawingProvider } from "./contexts/DrawingContext";
import DrawingContent from "./components/DrawingContent";


const AppContent = () => {
  const { config } = useTheme();

  return (
    <div className={`${config.global} min-h-screen p-6 `}>
      <DrawingContent />
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
