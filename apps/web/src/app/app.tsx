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
import Booking from './pages/booking/Booking';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import Service from './pages/service/service';
import './pages/service/service.css';

const App: React.FC = () => {


  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <Routes>
        <Route path="/"  Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/booking" Component={Booking} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
          <Route path="/service" Component={Service} />
        </Routes>
        

        <Footer />
      </div>
    </Router>
  );
};

export default App;

