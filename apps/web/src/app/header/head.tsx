import React from 'react';


const head: React.FC = () => {
  return (
    <div className='head'>
    <header>
      <p className='hospital'>WELL APPOINT</p>
    </header>
    <div className='number'>
    <p className='num'>NUMBER <br /></p>
    <p className='phone'>5785448552</p>
    </div>
    
    <div className="work">
    <p className='hour'>WORK HOUR</p>
    <p className='time'>8.00 AM to 11.00 PM</p>
    </div>

    <div className="address">
    <p className='location'>LOCATION</p>
    <p className='main_add'> Some location</p>
    </div>


    </div>
  );
};

export default head;
