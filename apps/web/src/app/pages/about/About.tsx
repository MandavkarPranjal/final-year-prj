import React from 'react';

const About: React.FC = () => {
  return (
    <div className='about-text'>
      <h1>Welcome to [Hospital Name]</h1>
    <img src="/images/hospital-building.jpg" alt="Hospital Building" />

    <p>
      Where compassionate care meets cutting-edge medical expertise. At [Hospital Name], we are dedicated to providing exceptional healthcare services with a commitment to the well-being of our community.
    </p>

    <p>
      Our state-of-the-art facility is equipped with the latest technology and staffed by a team of highly skilled and compassionate healthcare professionals. From our board-certified physicians to our dedicated nurses and support staff, every member of our team is committed to delivering personalized and comprehensive care.
    </p>

    <p>
      <strong>Our mission</strong> is to promote health and wellness by providing accessible, high-quality medical services in a patient-centered environment. We believe in treating each individual with dignity, respect, and empathy, ensuring that our patients feel supported throughout their healthcare journey.
    </p>

    <img src="/images/medical-team.jpg" alt="Medical Team" />
    
    <p>
      Thank you for considering [Hospital Name] as your healthcare destination. Whether you need preventive care, managing a chronic condition, or facing a medical emergency, we are here for you, dedicated to providing the highest standard of care. Your health is our priority.
    </p>
    </div>
  );
};

export default About;
