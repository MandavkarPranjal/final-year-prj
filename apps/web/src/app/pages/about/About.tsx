import React from 'react';
import {useState, useEffect } from 'react';
import Card from '../../card/Card';
import './About.css';
// import About from '../../About.css';
import abt_landscape from '../../../../public/images/abt_landscape.jpg';
import Rectangle from '../../../../public/images/Rectangle.jpg';
import Rectangle_53 from '../../../../public/images/Rectangle_53.jpg';
import blood from '../../../../public/images/blood.png';
import kidney from '../../../../public/images/kidney.png';
import tent from '../../../../public/images/tent.png';
import social from '../../../../public/images/social.png';

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



<p className='contact-1'>GET IN TOUCH</p>
<p className='contact-2'>CONTACT</p>

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
  <img className='contImg' src={blood} alt="" />
    <p className='emg_text'>Blood Bank</p>
    <p className='emg_text2'>(237) 681-812-255</p>
    <p className='emg_text2'>(237) 666-331-894</p>
</div>

<div className="loc">
  <img className='contImg' src={kidney} alt="" />
<p className='loct_text'>Organ Donation</p>
<p className='loct_text2'>(237) 666-331-894</p>
<p className='loct_text2'>(237) 681-812-255</p>
</div>

<div className="e-mail">
  <img className='contImg' src={tent} alt="" />
<p className='mail_text'>Health Camp</p>
<p className='mail_text2'>Our location</p>
<p className='mail_text2'>Random Places</p>
</div>

<div className="working">
  <img className='contImg' src={social} alt="" />
<p className='work_text'>Social Services</p>
<p className='work_text2'>Mon-Sat 09:00-20:00</p>
<p className='work_text2'>Sunday Emergency only</p>
</div>
</div>
</div>
</div>
);
  };
  
  export default About;
