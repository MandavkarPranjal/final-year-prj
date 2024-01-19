import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        
      </ul>

      <div className="book">
        <button className="book_btn">Book Appointment</button>
      </div>

    </nav>

    
  );
};

export default Navbar;
