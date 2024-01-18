import React from 'react';
import { HTMLProps } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>

            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/booking">Booking Appointment</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
       
      </ul>
    </nav>
  );
};

export default Navbar;
