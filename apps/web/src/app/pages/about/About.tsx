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
import transition from '../../transition';

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


<p className='abt_content1'>At WellAppoint Hospital, our constant endeavor is to stay at the forefront of medical advancements and we continuously strive to adapt to the latest technologies and treatment modalities. Our hunger for research, innovation, and clinical excellence has earned us accolades and recognition in the medical fraternity and we believe in fostering a compassionate and caring environment for our patients and their family members. <br />

Our patient-centric approach ensures that each individual receives personalized attention and that their family’s emotional and psychological well-being is taken care of during the entire healing process. We invite you to experience our world-class healthcare services with compassion in your health journey.</p>

<p className='abt_content2'> WellAppoint Hospitals has been at the forefront of providing world-class healthcare solutions and has consistently upheld its commitment to providing top-notch medical care, cutting-edge technology, and solid dedication to patient well-being.

we ensure that every patient receives the finest medical attention with empathy and a human touch. The Hospital Network has positively impacted the lives of more than 7.5 million patients, making significant strides in improving access to quality healthcare in the State of Maharashtra, as well as in Overseas Regions such as the Middle East, Africa, and various other geographical areas.
 </p>
</div>

<img  className='abt_img2' src={Rectangle_53} alt="" />

<p className='dr_text'>
  {/* <strong>DR.M.K.Gupta</strong><br /> */}
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime non ex mollitia ipsam possimus natus <br />aspernatur ratione velit voluptatibus placeat fuga quod, hic aliquid modi molestiae officiis saepe beatae. <br />
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
  
  export default transition(About);
