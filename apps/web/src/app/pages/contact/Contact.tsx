import React from 'react';
import './contact.css';
import contactImg from '../../../../public/images/contactImg.jpg';
import call from '../../../../public/images/call.png';
import time from '../../../../public/images/time.png';
import location from '../../../../public/images/location.png';
import mail from '../../../../public/images/mail.png';
import transition from '../../transition';

const Contact: React.FC = () => {
  return (
    <div className='main-container'>

      <img className='cont-img' src={contactImg} alt="" />

      <div className="cont-body">
        <p className="contact-text">Contact</p>
    
    <div className="schedule">
      <div className='sch-title'>Schedule Hours</div>
      

    <div className="sch-body">
      <div className="day">Monday</div>
      <div className="Time">09:00 AM - 07:00 PM </div>

      </div>

      <div className="sch-body">
      <div className="day">Tuesday</div>
      <div className="Time">09:00 AM - 07:00 PM </div>
      </div>

      <div className="sch-body">
      <div className="day">Wensday</div>
      <div className="Time">09:00 AM - 07:00 PM </div>
      </div>

      <div className="sch-body">
      <div className="day">Thrusday</div>
      <div className="Time">09:00 AM - 07:00 PM </div>
      </div>

      <div className="sch-body">
      <div className="day">Friday  </div>
      <div className="FTime">09:00 AM - 07:00 PM </div>
      </div>
      
      <div className="sch-body">
      <div className="day">Saturday</div>
      <div className="Time">09:00 AM - 07:00 PM </div>
      </div>

      <div className="sch-body">
      <div className="day">Sunday</div>
      <div className="Time">09:00 AM - 07:00 PM </div>
      </div>

      
      
    </div>


     <div className="main_conct">
{/* <div className="cont">
<p className='touch'>get in touch</p>
    <p className='hosp_cont'>contact</p>
</div> */}


<div className="main-div">
<div className="contac">

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
    </div>
  );
};

export default transition(Contact);
