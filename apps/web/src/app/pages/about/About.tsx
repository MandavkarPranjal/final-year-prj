import React from 'react';
import {useState, useEffect } from 'react';
import Card from '../../card/Card';
import './About.css';
// import About from '../../About.css';
import abt_landscape from '../../../../public/images/abt_landscape.jpg';
import Rectangle from '../../../../public/images/Rectangle.jpg';
import Rectangle_53 from '../../../../public/images/Rectangle_53.jpg';
import call from '../../../../public/images/call.png';
import time from '../../../../public/images/time.png';
import location from '../../../../public/images/location.png';
import mail from '../../../../public/images/mail.png';

const About = () => {

  return (
  <div className="main">

    <img className='abt_land' src={abt_landscape} alt="" />
    <p className='abt_main'>About Us</p>

        <img className='abt_img' src={Rectangle} alt="" />
        <div className="abt_text">
        <p className='hosp_name'>WELCOME TO 'HOSPITAL NAME'</p>
        <p className='hosp_intro'>Best Care for Your <br />
Good Health</p>


<p className='abt_content1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis error possimus nulla <br /> voluptatem ducimus eligendi vel quod cupiditate nemo illum in, est, deserunt fugit eius suscipit, <br /> voluptate ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus veritatis <br /> voluptates neque perferendis nisi illo ipsum. Facilis at possimus sed iste laborum eaque incidunt <br /> labore, vero, doloribus esse error.</p>

<p className='abt_content2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis error possimus nulla <br /> voluptatem ducimus eligendi vel quod cupiditate nemo illum in, est, deserunt fugit eius veritatis </p>
</div>

<img className='abt_img2' src={Rectangle_53} alt="" />

<p className='dr_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime non ex mollitia ipsam possimus natus <br />aspernatur ratione velit voluptatibus placeat fuga quod, hic aliquid modi molestiae officiis saepe beatae. <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime non ex mollitia ipsam possimus natus <br /> aspernatur ratione velit voluptatibus placeat fuga quod, hic aliquid modi molestiae officiis saepe beatae.</p>



<p className='contact1'>GET IN TOUCH</p>
<p className='contact2'>CONTACT</p>

<div className="dr_imgs">

<Card 
  image={Rectangle_53}
  name='Dr. D.K Gupta'
  specialization='Dermatology'
/>

<Card 
  image={Rectangle_53}
  name='Dr. D.K Gupta'
  specialization='Dermatology'
/>

< Card 
  image={Rectangle_53}
  name='Dr. D.K Gupta'
  specialization='Dermatology'
/>


</div>

<div className="main_conct">
<div className="cont">
<p className='touch'>get in touch</p>
    <p className='hosp_cont'>contact</p>
</div>

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
);
  };
  
  export default About;
