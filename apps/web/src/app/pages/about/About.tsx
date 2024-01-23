import React from 'react';
const About: React.FC = () => {
  return (
    <div>
      <h1>Welcome to [Hospital Name]</h1>
      <div className='main-div'>
          <div className='about-div'>
            
            <img className= "hospital-img" src="../../../../public/images/hospital.jpg" alt="Hospital Building" />
          </div>
            <div className='mission-div'>
              <h2>Our Mission</h2>
              <p>
                To provide exceptional healthcare services to every patient, every time.
              </p>
            </div>
            
      </div>
      <div>
          <p>
            Where compassionate care meets cutting-edge medical expertise. At [Hospital Name], we are dedicated to providing exceptional healthcare services with a commitment to the well-being of our community.
          </p>

          <p>
            Our state-of-the-art facility is equipped with the latest technology and staffed by a team of highly skilled and compassionate healthcare professionals. From our board-certified physicians to our dedicated nurses and support staff, every member of our team is committed to delivering personalized and comprehensive care.
          </p>
      </div>
        <div>
           <img src="/images/medical-team.jpg" alt="Medical Team" />
        </div>
    </div>
  );
};

export default About;
