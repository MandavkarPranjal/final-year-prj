import React from 'react';
import hospLogo from '../../../public/images/hospLogo.png';


const Footer: React.FC = () => {
  return (
    <footer>
     <img className='hosp-logo' src={hospLogo} alt="" />
     <h1>Well Appoint</h1>
     <hr />
      <div className="fotter">
        <div className="f-spl">
          <h3 className='fhead'>Specialities</h3>
          <p>Cardiology</p>
          <p>Neurology</p>
          <p>Dermatology</p>
          <p>Dental Care</p>
          <p>Oncology</p>
          <p>Pediatrician</p>
        </div>

        <div className="goto">
          <h3 className='fhead'>Go To</h3>
         <a href="#">Home</a>
         <a href="contact">Contact</a>
         <a href="about">About Us</a>
         <a href="service">Service</a>
        </div>

        <div className="appt">
          <h3 className='fhead'>Meet Doctor</h3>
          <a href="form">Take a Appointment</a>
        </div>

        <div className="links">
          <h3 className='fhead'>Connect with Us</h3>
          <a href="">Twitter</a>
          <a href="">Youtube</a>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
        </div>

        </div>
        <hr />
      <p>&copy; 2024 Your Hospital Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
