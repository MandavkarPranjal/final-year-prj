import React from 'react';
import './contact.css';
import call from '../../../../public/images/call.png';
import time from '../../../../public/images/time.png';
import location from '../../../../public/images/location.png';
import mail from '../../../../public/images/mail.png';

const Contact: React.FC = () => {
  return (
    <div className='main-container'>
    
      <div className="main-form">
      <div className="full-form">
      <input
          type="text"
          id="firstName1"
          placeholder="First Name"
          name="firstName"  
      />
      <input
          type="text"
          id="e-mail"
          placeholder="E-Mail"
          name="E-mail"  
      />
      <div className="cont-form">
         <input
          type="text"
          id="subject"
          placeholder="Subject"
          name="subject"  
      />
      <div className="second">
      <input
          type="text"
          id="message"
          placeholder="Message"
          name="message"  
      />
      </div>
</div>
</div>
<button className='form-submit'>submit</button>
</div>


     <div className="main_conct">
{/* <div className="cont">
<p className='touch'>get in touch</p>
    <p className='hosp_cont'>contact</p>
</div> */}


<div className="main-div">
<div className="contact">

<div className="emergncy">
  <img src={call} alt="" />
    <p className='emg_text'>Emergency</p>
    <p className='emg_text2'>(237) 681-812-255</p>
    <p className='emg_text2'>(237) 666-331-894</p>
</div>

<div className="loc">
  <img src={location} alt="" />
<p className='loct_text'>Location</p>
<p className='loct_text2'>0123 Some place</p>
<p className='loct_text2'>9876 Some country</p>
</div>
</div>

<div className="contact2">
<div className="e-mail">
  <img src={mail} alt="" />
<p className='mail_text'>EMAIL</p>
<p className='mail_text2'>fildineeesoe@gmil.com</p>
<p className='mail_text2'>myebstudios@gmail.com</p>
</div>

<div className="working">
  <img src={time} alt="" />
<p className='work_text'>WORKING HOUR</p>
<p className='work_text2'>Mon-Sat 09:00-20:00</p>
<p className='work_text2'>Sunday Emergency only</p>
</div>
</div>
</div>
    </div>
    </div>
  );
};

export default Contact;
