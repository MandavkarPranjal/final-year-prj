import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './app.css';
import Footer from './footer/Footer';
import './footer/Footer.css';
import Header from './header/head';
import './header/header.css';
import Navbar from './navbar/Navbar';
import './navbar/Navbar.css';
import Dashboard from './dashboard/dashboard';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import Service from './pages/service/service';
import './pages/service/service.css';
import AppointmentForm from './form/Form';
import dashHome from './dashboard/pages/dashHome';
import Products from './dashboard/pages/Products';
import Analytics from './dashboard/pages/Analytics';
import Settings from '@mui/icons-material/Settings';

const App: React.FC = () => {


  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <Routes>
        <Route path="/"  Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
          <Route path="/service" Component={Service} />
          <Route path="/Form" Component={AppointmentForm} />
          {/* <Route path='/dashboard'Component={Dashboard}/>
          <Route path="/home" Component={dashHome} />
          <Route path="/products" Component={Products} />
          <Route path="/analytics" Component={Analytics} />
          <Route path="/settings" Component={Settings} /> */}
        </Routes>
        

        <Footer />
      </div>
    </Router>
  );
};

export default App;

