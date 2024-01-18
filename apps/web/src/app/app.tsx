import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';  
import Home from './pages/home/Home';  
import Login from './pages/login/login';
import Booking from './pages/booking/Booking';  
import Contact from './pages/contact/Contact';  
import About from './pages/about/About'; 
import './navbar/Navbar.css';
import './footer/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import image1 from '../../public/images/1.jpg'
import Card from './card/Card';

const App: React.FC = () => {


  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/"  Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/booking" Component={Booking} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

