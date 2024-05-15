import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material"; // Import the Theme type
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import Topbar from "./global/topbar/topbar";
import Dashboard from "./pages/dashboard/dashboard";
import Sidebar from "./global/sidebar/sidebar";
import Team from "./pages/team/team";
import Contacts from "./pages/appointmentTable/contacts";
// import Invoices from "./pages/invoices/invoices";
import Form from "./pages/user-form/user-form";
import Calendar from "./pages/calendar/calendar";
import FAQ from "./pages/faq/faq";
import Bar from "./pages/bar/bar";
import Pie from "./pages/pie/pie";
import { useEffect, useState } from "react";
import { SnackbarProvider } from 'notistack'
import { User } from "./context/user-data-transfer";
import { UserContext } from "./context/user-context";
import { Layout } from "./components/layout/layout";
import { LoginPage } from "./components/LoginPage/LoginPage";
import LogOut from "./components/logout/logout";

export function App() {
  const [theme, colorMode] = useMode();

  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  const onLogout = async () => {
    localStorage.clear();
    console.log('app.tsx logout reached', user);
    setUser(null);
    navigate('/login');
  }
  const onLogin = (user: User) => {
    localStorage.setItem('User', JSON.stringify(user));
    setUser(user);
    console.log('onLogin', user);
    navigate('/dashboard');
  }

  useEffect(() => {
    const userFromStorage = localStorage.getItem('User');
    console.log('user from storage', userFromStorage);
    if (userFromStorage !== null) {
      const user: User = JSON.parse(userFromStorage);
      setUser(user);
      console.log('use effect user', user);
    }
  }, []);

  return (
    <UserContext.Provider value={user}>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider>
            {user ? (
              <div className='app'>
                <Sidebar />
                <main className="content">
                  <Topbar />
                  <Routes>
                    <Route path="/" element={<Layout />} />
                    {user.role.includes('ADMIN') && <Route path="/dashboard" element={<Dashboard />} />}
                    {user.role.includes('ADMIN') && <Route path="/team" element={<Team />} />}
                    {user.role.includes('ADMIN') && <Route path="/appointment" element={<Contacts />} />}
                    {user.role.includes('ADMIN') && <Route path="/faq" element={<FAQ />} />}

                    {user.role.includes('ADMIN') && <Route path="/form" element={<Form />} />}
                    {user.role.includes('ADMIN') && <Route path="/calendar" element={<Calendar />} />}

                    {user.role.includes('ADMIN') && <Route path="/pie" element={<Pie />} />}
                    {user.role.includes('ADMIN') && <Route path="/bar" element={<Bar />} />}
                    {user.role.includes('RECEPTIONIST') && <Route path="/bar" element={<Bar />} />}
                    {user && user.role.includes('RECEPTIONIST') && <Route path="/pie" element={<Pie />} />}
                    {user && user.role.includes('RECEPTIONIST') && <Route path="/appointment" element={<Contacts />} />}
                    {user && user.role.includes('RECEPTIONIST') && <Route path="/faq" element={<FAQ />} />}
                    {user && user.role.includes('RECEPTIONIST') && <Route path="/dashboard" element={<Dashboard />} />}
                    {user && user.role.includes('RECEPTIONIST') && <Route path="/calendar" element={<Calendar />} />}
                    {user && user.role.includes('DOCTOR') && <Route path="/appointment" element={<Contacts />} />}


                    <Route path="/logout" element={<LogOut onLogout={onLogout} />} />
                  </Routes>
                </main>
              </div>
            ) : (
              // If user is not logged in, show only the login page
              <Routes>
                <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            )}
          </SnackbarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </UserContext.Provider>

  );
}

export default App;






