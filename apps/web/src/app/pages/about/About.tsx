import React from 'react';
import './About.css';
import Rectangle from '../../../../public/images/Rectangle.jpg';
import Rectangle_53 from '../../../../public/images/Rectangle_53.jpg';
import call from '../../../../public/images/call.png';
import time from '../../../../public/images/time.png';
import location from '../../../../public/images/location.png';
import mail from '../../../../public/images/mail.png';

const About: React.FC = () => {
  return (
    <div className="main">

        <img className='abt_img' src={Rectangle} alt="" />
        <div className="abt_text">
        <p className='hosp_name'>WELCOME TO 'HOSPITAL NAME'</p>
        <p className='hosp_intro'>Best Care for Your <br />
Good Health</p>
 <div className="spl">
<ul className='abt_list'>
  <li>A Passion for Healing</li>
  <li>5-Star Care</li>
  <li>Always Caring</li>
</ul>

<ul className='abt_list2'>
<li>A Legacy of Excellence</li>
  <li>All our best</li>
  <li>Believe in Us</li>
</ul>
</div>

<p className='abt_content1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis error possimus nulla <br /> voluptatem ducimus eligendi vel quod cupiditate nemo illum in, est, deserunt fugit eius suscipit, <br /> voluptate ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minus veritatis <br /> voluptates neque perferendis nisi illo ipsum. Facilis at possimus sed iste laborum eaque incidunt <br /> labore, vero, doloribus esse error.</p>

<p className='abt_content2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis error possimus nulla <br /> voluptatem ducimus eligendi vel quod cupiditate nemo illum in, est, deserunt fugit eius veritatis </p>
</div>

<img className='abt_img2' src={Rectangle_53} alt="" />

<p className='dr_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime non ex mollitia ipsam possimus natus <br />aspernatur ratione velit voluptatibus placeat fuga quod, hic aliquid modi molestiae officiis saepe beatae. <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime non ex mollitia ipsam possimus natus <br /> aspernatur ratione velit voluptatibus placeat fuga quod, hic aliquid modi molestiae officiis saepe beatae.</p>

<p className='contact1'>GET IN TOUCH</p>
<p className='contact2'>CONTACT</p>

<div className="contact">

<div className="emergncy">
  <img src={call} alt="" />
    <p className='emg_text'>Emergency</p>
</div>

<div className="loc">
  <img src={location} alt="" />
<p className='loct_text'>Location</p>
</div>

<div className="e-mail">
  <img src={mail} alt="" />
<p className='mail_text'>EMAIL</p>
</div>

<div className="working">
  <img src={time} alt="" />
<p className='work_text'>WORKING HOUR</p>
</div>
</div>


</div>
    
  );
};

export default About;
