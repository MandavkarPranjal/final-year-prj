import React, { useState, useEffect } from 'react';
import image1 from '../../../../public/images/1.jpg';
import image2 from '../../../../public/images/2.jpg';
import image3 from '../../../../public/images/3.jpg';
import image4 from '../../../../public/images/4.jpg';
import './Home.css'; // Import the CSS file
import Card from '../../card/Card';

const Home: React.FC = () => {

  const [userData, setUserData] = useState({
    image: image1,
    name: 'Dr.D.K Gupta',
    specialization: 'Dermatology.',
  });


  const [currentImage, setCurrentImage] = useState<number>(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 4) + 1); // Cycling through images 1 to 5
    }, 8459);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const getImageSource = () => {
    // Replace this logic with the appropriate logic for your image sources
    switch (currentImage) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      default:
        return '';
    }
  };

  return (
    <div>
      <h1 className="text-center">Welcome to Doctor's Appointment</h1>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={getImageSource()} className="img-slider" alt="..." />
          </div>
          {/* Add more carousel items as needed */}
        </div>
      </div>
      <div>
        
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