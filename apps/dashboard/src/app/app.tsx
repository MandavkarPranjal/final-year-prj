import { ColorModeContext, useMode } from "./theme";
import { CssBaseline,Theme, ThemeProvider } from "@mui/material"; // Import the Theme type
import { Routes, Route} from "react-router-dom";
import Topbar from "./global/topbar/topbar";
import Dashboard from "./pages/dashboard/dashboard";
import Sidebar from "./global/sidebar/sidebar";
import Team from "./pages/team/team";
import Contacts from "./pages/contacts/contacts";
import Invoices from "./pages/invoices/invoices";
import Form from "./pages/user-form/user-form";
import Calendar from "./pages/calendar/calendar";
import FAQ from "./pages/faq/faq";
import Bar from "./pages/bar/bar";
import Pie from "./pages/pie/pie";
// import Line from "./pages/line/line";
import { useState } from "react";
import { SnackbarProvider} from 'notistack'


export function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
    {/* // <ColorModeContext.Provider value={{ ...colorMode, toggleColorMode: () => {} }}>
    //   <ThemeProvider theme={theme as Partial<Theme>}> */}
        <CssBaseline /> 
          <div className='app'>
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" Component={Dashboard} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  {/* <Route path="/line" element={<Line />} /> */}
              </Routes>
            </main>
          </div>
          </SnackbarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
