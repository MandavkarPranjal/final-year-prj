import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import AppointmentForm from '.././form/Form';



const Navbar: React.FC = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)
  const handleclick = () => {
    setShowAppointmentForm(true);
  };

  const [isResponsive, setIsResponsive] = useState(false);
  const handleBurgerClick = () => {
    setIsResponsive((prevState) => !prevState);
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
      </ul>

      <div className="rightnav v-class-resp">
            
        </div>
        <div className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>

      <div className="book">
        <button className="book_btn" onClick={handleclick}><Link to="/Form">Book Appointment</Link></button>
      </div>
      
    </nav>


// {/* Assuming your JSX structure contains elements with the specified classes */}
//   <><div className="burger" onClick={handleBurgerClick}>
//     {/* Your burger icon or button content goes here */}
//   </div><div className={`navbar ${isResponsive ? 'h-nav-resp' : ''}`}>
//       {/* Your other navbar content goes here */}
//     </div><div className={`navlist ${isResponsive ? 'v-class-resp' : ''}`}>
//       {/* Your navlist content goes here */}
//     </div><div className={`rightnav ${isResponsive ? 'v-class-resp' : ''}`}>
//       {/* Your rightnav content goes here */}

//     </div></>
  );
};

export default Navbar;