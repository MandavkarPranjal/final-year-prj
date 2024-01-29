import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import AppointmentForm from '.././form/Form';



const Navbar: React.FC = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)
  const handleclick = () => {
    setShowAppointmentForm(true);
  };

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
        <button className="book_btn" onClick={handleclick}><Link to="/Form">Book Appointment</Link></button>
      </div>
      
    </nav>
  );
};

export default Navbar;