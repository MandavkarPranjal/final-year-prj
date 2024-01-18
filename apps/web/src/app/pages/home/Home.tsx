import React, { useState, useEffect } from 'react';
import image1 from '../../../../public/images/1.jpg';
import image2 from '../../../../public/images/2.jpg';
import image3 from '../../../../public/images/3.jpg';
import image4 from '../../../../public/images/4.jpg';
import background from '../../../../public/images/background.jpg';
import landscape from '../../../../public/images/landscape.jpeg';
import './Home.css'; // Import the CSS file
import Card from '../../card/Card';
import doc from '../../../../public/images/doc.jpg';


const Home: React.FC = () => {

  const [userData, setUserData] = useState({
    image: doc,
    name: 'Dr.D.K Gupta',
    specialization: 'Dermatology.',
  });

  


  
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

    <div className="service">
      <p className='service_small'>Care you can believe in</p>
      <p className='service_big'>Our Services</p>
    </div>
    

      
      <div className='home-cards'>
        
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
      </div>
    </div>
  );
};

export default Home;