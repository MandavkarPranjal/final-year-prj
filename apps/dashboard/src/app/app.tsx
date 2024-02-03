import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material"; // Import the Theme type
import Topbar from "./global/topbar/topbar";
export function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={(outerTheme) => ({ ...outerTheme, ...theme })}>
        <CssBaseline /> 
          <div className='app'>
            <main className="content">
              <Topbar />
              
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
