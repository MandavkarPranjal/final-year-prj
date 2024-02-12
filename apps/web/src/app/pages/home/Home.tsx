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
      <p className='welcome_content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aut excepturi <br /> atque earum provident quaerat sed labore vitae repudiandae <br /> qui quod  molestias ducimus numquam at consequatur fuga, nobis repellendus. </p> 

      <img className='intro_img' src={landscape} alt="" />
    </div>

    <h2 className='spl-header'>Specialised departments for your every need</h2>
<div className="spl-container">


  <div className="c1">
    <div className="c1-top">
    <img className='spl-logo' src={heart} alt=""/>
    <h4>Cardiology</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa. </p>
  </div>

 

  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={child} alt=""/>
    <h4>Paediatrics</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa.</p>
  </div>

  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={denatl} alt=""/>
    <h4>Dental Care</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa. </p>
  </div>
</div>

<div className="spl-container">


  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={skin} alt=""/>
    <h4>Dermatology</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa. </p>
  </div>

  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={cancer} alt=""/>
    <h4>Oncology</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa. </p>
  </div>

  <div className="c1">
  <div className="c1-top">
    <img className='spl-logo' src={xRay} alt=""/>
    <h4>Radiology</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa.</p>
  </div>
</div>
        
<div className="home-serv">
        <p className='service_small'>Care you can believe in</p>
        <p className='service_small'>Our Services</p>


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

<p className='serv2_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nulla debitis molestiae minus eaque impedit quia porro, voluptatem exercitationem eveniet modi. Quia ipsam unde neque ipsum quibusdam. Eos, voluptatem laborum..</p>
</div>
<p className='serv2_text2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa, earum vero molestiae incidunt inventore delectus, quo eum magni impedit voluptates nostrum perspiciatis consequatur reiciendis non, similique asperiores magnam odit.</p>
{/* <img className='sple_img2' src={Rectangle14} alt="" /> */}
</div>

{/* review card */}

<h2 className='review-header'>Hear the heartwarming stories of patients</h2>
<div className="review-container">


  <div className="r1">
    <div className="r1-top">
     <img className='review-logo' src={xRay} alt=""/>
    <h4>Mr.Reddy</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa. </p>
  </div>

 

  <div className="r1">
  <div className="r1-top">
     <img className='review-logo' src={xRay} alt=""/> 
    <h4>Mr.Mandavkar</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa.</p>
  </div>

  <div className="r1">
  <div className="r1-top">
     <img className='review-logo' src={xRay} alt=""/> 
    <h4>Vivek Gupta</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa. </p>
  </div>

  <div className="r1">
  <div className="r1-top">
     <img className='review-logo' src={xRay} alt=""/> 
    <h4>Vivek Gupta</h4>
    </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat necessitatibus aspernatur ea, dolorem et at ratione voluptatibus, in omnis sequi dignissimos culpa. </p>
  </div>
</div>

</div>



   
  );
 };

export default transition(Home);