import React, { useState, useEffect } from 'react';
import background from '../../../../public/images/background.jpg';
import landscape from '../../../../public/images/landscape.jpeg';
import Rectangle14 from '../../../../public/images/Rectangle14.jpg';
import Rectangle34 from '../../../../public/images/Rectangle34.jpg';
import heart from '../../../../public/images/heart.png';
import child from '../../../../public/images/child.png';
import denatl from '../../../../public/images/dental.png';
import skin from '../../../../public/images/skin.png';
import cancer from '../../../../public/images/cancer.png';
import xRay from '../../../../public/images/xRay.png';
import review from '../../../../public/images/review.png';
import './Home.css'; // Import the CSS file
import transition from '../../transition';



 const Home: React.FC = () => {
  
  return (
  <div className='home'>

    <div className="home_img">
    <img className='main_img' src={background} alt="" />
    <div className="img_text">
      <p className='caring'>Caring for Life</p>
      <p className='leading'>Leading the Way <br />
      in Medical Excellence</p>
    </div>
    </div>

    <div className="intro">
      <p className='welcome'>Welcome to Meddical</p>
      <p className='welcome_two'>A Great Place to Receive Care</p>
      <p className='welcome_content'>Is a multispecialty tertiary care hospital providing the highest standard of clinical expertise and <br /> nursing care by offering the latest technology, and state-of-the-art hospital facilities. <br /> The Hospital focusses on rapid  assessment Where compassionate healing blends with cutting-edge expertise. <br />
Raising healthcare standards and redefining excellence in patient care </p> 

      <img className='intro_img' src={landscape} alt="" />
    </div>

    <h2 className='spl-header'>Specialised departments for your every need</h2>
<div className="spl-container">

<div className="c1">
    <div className="c1-top">
    <img className='spl-logo' src={heart} alt=""/>
    <h4>Cardiology</h4>
    </div>
<p>The Department of Cardiology at WellAppoint Hospital & Research Centre is equipped with state-of-the-art equipment and a dedicated team of Cardiologists and Cath lab technicians with a wide experience in management of complex cardiac problems. </p>
  </div>

 

  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={child} alt=""/>
    <h4>Paediatrics</h4>
    </div>
<p>The Department of Paediatrics has a full complement of high-end equipment. An expert team of doctors and well-trained nurses ensure prompt services, and provide a wide range of diagnostic and therapeutic procedures</p>
  </div>

  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={denatl} alt=""/>
    <h4>Dental Care</h4>
    </div>
<p>Dentistry Department at WellAppoint Hospital takes professionals look into the patient’s needs and condition to provide multidisciplinary care. We have a team of licensed dental specialists who provide routine care and special practices for every type of dental problem. </p>
  </div>
</div>

<div className="spl-container2">


  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={skin} alt=""/>
    <h4>Dermatology</h4>
    </div>
<p>Our hospital’s plastic surgeon team has received specialized training to provide Best services. We have a team of skillful dermatologists who carry out various processes for treating general skin diseases as well as severe skin disorders. </p>
  </div>

  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={cancer} alt=""/>
    <h4>Oncology</h4>
    </div>
<p>Cancer of any stage can be ruthless and challenging to treat. The oncology department of the WellAppoint Hospital offers an extensive range of full-fledged treatments in the diagnosis and all types of cancer treatment in pune. </p>
  </div>

  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={xRay} alt=""/>
    <h4>Radiology</h4>
    </div>
<p>We have a major branch of the Radiology and Imaging department that helps cater to all other hospital branches. We help patients to detect severe problems through our advanced technology, exceptional care, and devoted doctors</p>
  </div>
</div>
        
<div className="home-serv">
        <p className='service_small'>Care you can believe in</p>
        <p className='service_small2'>Our Services</p>


        <div className="serv1">
        <p>A passion for putting patients first.</p>
        <div className="sple">
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
<img className='sple_img' src={Rectangle14} alt="" />
</div>

</div>

<div className="serv2">

<p className='serv2_text'>Our comprehensive range of medical services encompasses various specialties and includes Cardiology and Cardiac Surgery, Neurology and Neurosurgery, Haematology and bone Marrow Transplants, Organ Transplants, Oncology, Orthopaedics, IVF, Urology, Endocrinology and Gastroenterology to name a few. The hospital also holds the distinction of being the fastest-growing Liver Transplant Centre in Western India, performing the highest number of Bone Marrow Transplants in Western India, and pioneers in Neurosciences in Maharashtra.</p>
</div>
<p className='serv2_text2'>Our patient-centric approach ensures that each individual receives personalized attention and that their family’s emotional and psychological well-being is taken care of during the entire healing process.</p>
<img className='sple_img2' src={Rectangle14} alt="" />
</div>

{/* review card */}

<h2 className='review-header'>Hear the heartwarming stories of patients</h2>
<div className="review-container">



  <div className="r1">
    <div className="r1-top">
     <img className='review-logo' src={review} alt=""/>
    <h4>Mr.Reddy</h4>
    </div>
<p>I have just no words to thank him for the amazing care and love he shows for her, Despite odd times, including covid days, I have reached out to him asking for guidance for my condition he has been a guiding angel, despite his busy schedule. </p>
  </div>

  <div className="r1">
  <div className="r1-top">
     <img className='review-logo' src={review} alt=""/> 
    <h4>Mr.Mandavkar</h4>
    </div>
<p>I cannot praise the service of WellAppoint. It is a highly skilled surgeon and goes an extra mile for his patients. My father had robotic surgery last month and despite the complications, it was a success. </p>
  </div>

   <div className="r1">
  <div className="r1-top">
     <img className='review-logo' src={review} alt=""/> 
    <h4>Vivek Gupta</h4>
    </div>
<p>My son was diagnosed with cancer and doctor told to operate immediately. Surgery was successful but after surgery doctor recommended 6 cycles of chemotherapy which was non affordable. I approached charity department for monetary help.</p>
  </div>

  <div className="r1">
  <div className="r1-top">
     <img className='review-logo' src={review} alt=""/> 
    <h4>Mrs Gupta</h4>
    </div>
<p>I appreciate the quick decision taken by doctors of admission and good treatment given. During discharge immediate help was provided by Mediclaim department for approval and excellent service during the complete process.</p> 
  </div> 


</div>

</div>



   
  );
 };

export default transition(Home);