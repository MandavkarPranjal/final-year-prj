import React, { useState, useEffect } from 'react';
import background from '../../../../public/images/background.jpg';
import landscape from '../../../../public/images/landscape.jpeg';
import Rectangle14 from '../../../../public/images/Rectangle14.jpg';
import Rectangle34 from '../../../../public/images/Rectangle34.jpg';
import './Home.css'; // Import the CSS file



 const Home: React.FC = () => {

//   const [userData, setUserData] = useState({
//     image: doc,
//     name: 'Dr.D.K Gupta',
//     specialization: 'Dermatology.',
//   });

  
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
<img className='sple_img2' src={Rectangle14} alt="" />

 
    

      
      {/* <div className='home-cards'>
        
        <Card 
            image={userData.image}
            name={userData.name}
            specialization={userData.specialization}
          />
        
        <Card 
            image={userData.image}
            name={userData.name}
            specialization={userData.specialization}
          />
        
        <Card 
            image={userData.image}
            name={userData.name}
            specialization={userData.specialization}
          />
        
        <Card 
            image={userData.image}
            name={userData.name}
            specialization={userData.specialization}
          />
      </div> */}
    </div>
  );
 };

export default Home;