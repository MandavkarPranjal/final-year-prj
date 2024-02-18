import React from "react";
import { useEffect } from 'react';
import service1 from '../../../../public/images/service1.png';
import service2 from '../../../../public/images/service2.jpg';
import vector from '../../../../public/images/vector.png';
import transition from "../../transition";

const Service: React.FC = () => {

    useEffect(() => {
        const counters = document.querySelectorAll('.value');
        const speed = 400;
    
        counters.forEach((counter) => {
        const animate = () => {
            const value = +counter.getAttribute('data-akhi')!;
            const data = +(counter as HTMLElement).innerText;

            const time = value / speed;
            if (data < value) {
                (counter as HTMLElement).innerText = Math.ceil(data + time).toString();
                setTimeout(animate, 1);
            } else {
                (counter as HTMLElement).innerText = value.toString();
            }
        };

        animate();
        });
      }, []);

    return (
        <div className="main">

            <img className="first_img" src={service1} alt="" />
            <p className="service">Our Services</p>


            <div className="content1">
        <div className="upside">
                <div className="card_one">
                    <img src={service2} alt="" />

            <p className="free">Free Checkup</p>
            <p className="contents">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae </p>
                    
                </div>

                <div className="card_two">
                <img src={service2} alt="" />

<p className="free">Free Checkup</p>
<p className="contents">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis </p>
                    
                </div>

                <div className="card_three">
                <img src={service2} alt="" />

<p className="free">Free Checkup</p>
<p className="contents">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis </p>
</div>
                    
            </div>
                </div>
            

            <div className="main_serv">
        <p className="always">Always caring</p>
        <p className="spl_text">Our Specialties</p>


        <div className="spl1">

            <div className="Neurology">
                <img className="spl-img" src={vector} alt="" />
                <p className="neuro">Neurologist</p>  
            </div>

            <div className="Neurology">
                <img className="spl-img" src={vector} alt="" />
                <p className="neuro">Dermatologist</p>  
            </div>

            <div className="Neurology">
                <img className="spl-img" src={vector} alt="" />
                <p className="neuro">Cardiologist</p>  
            </div>

            <div className="Neurology">
                <img className="spl-img" src={vector} alt="" />
                <p className="dentist">Dentist</p>  
            </div>  

            </div>

            <div className="spl1">

            <div className="Neurology">
                <img className="spl-img" src={vector} alt="" />
                <p className="neuro">Gynecologist</p>  
            </div>

            <div className="Neurology">
                <img className="spl-img" src={vector} alt="" />
                <p className="radio">Radiology</p>  
            </div>

            <div className="Neurology">
                <img className="spl-img" src={vector} alt="" />
                <p className="neuro">Oncologist</p>  
            </div>

            <div className="Neurology">
                <img className="spl-img" src={vector} alt="" />
                <p className="neuro">Pediatricians</p>  
            </div>  

            </div>
        </div>

<div className="records">

    <h2 className="happy">Happily Served</h2>
  <div className="recMain">
  <div className="crd1">
      {/* <div className="value" data-akhi="2000">
        0
      </div>
    <div className="content">
      <p>New Borns</p>
    </div> */}
    <p className="crdtxt">New Borns</p>
    <div className="c-1"></div>

    </div>

  <div className="crd1">
      {/* <div className="value" data-akhi="1000000">
        0
      </div>
    <div className="content">
      <p>Happy and healthy Customers</p>
    </div> */}
    <p className="crdtxt">Happy and healthy Customers</p>
    <div className="c2"></div>
  </div>

  <div className="crd1">
      {/* <div className="value" data-akhi="350">
        0
      </div>
    <div className="content">
      <p>Cancer Recovery</p>
    </div> */}
    <p className="crdtxt">Cancer Recovery</p>
    <div className="c3"></div>
  </div>
</div>
</div>

</div>

          
        
    );
};



export default transition(Service);