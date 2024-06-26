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
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import Service from './pages/service/service';
import './pages/service/service.css';
import AppointmentForm from './form/Form';
import { AnimatePresence } from 'framer-motion';
import { SnackbarProvider} from 'notistack'

const App: React.FC = () => {


  return (
    <Router>
        <SnackbarProvider>

       
      <div>
        <Header />
        <Navbar />
        <AnimatePresence mode="wait">

        <Routes>
        <Route path="/"  Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
          <Route path="/service" Component={Service} />
          <Route path="/Form" Component={AppointmentForm} />
        </Routes>
        </AnimatePresence>
        

        <Footer />
      </div>
      </SnackbarProvider>
    </Router>
  );
};

export default App;

