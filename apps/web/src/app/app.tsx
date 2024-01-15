import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './component/Navbar';  
import Footer from './component/Footer';  
import Home from './pages/Home';  
import Login from './component/Login';  
import Booking from './component/Booking';  
import Contact from './component/Contact';  
import About from './component/About';  
import './component/Navbar.css';
import './component/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

