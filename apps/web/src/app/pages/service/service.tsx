import React from "react";
import service1 from '../../../../public/images/service1.png';
import service2 from '../../../../public/images/service2.jpg';
import vector from '../../../../public/images/vector.png';

const service: React.FC = () => {
    return (
        <div className="main">

            <img className="first_img" src={service1} alt="" />
            <p className="service">Our Services</p>

            

            <div className="content1">
        <div className="up">
                <div className="card_one">
                    <img src={service2} alt="" />

            <p className="free">Free Checkup</p>
            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae </p>
                    
                </div>

                <div className="card_two">
                <img src={service2} alt="" />

<p className="free">Free Checkup</p>
<p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis </p>
                    
                </div>

                <div className="card_three">
                <img src={service2} alt="" />

<p className="free">Free Checkup</p>
<p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis </p>
</div>
                    
            </div>
                </div>
            

            <div className="main_serv">
        <p className="always">Always caring</p>
        <p className="spl_text">Our Specialties</p>


        <div className="spl1">

            <div className="Neurology">
                <img src={vector} alt="" />
                <p className="neuro">Neurology</p>  
            </div>

            <div className="Neurology">
                <img src={vector} alt="" />
                <p className="neuro">Neurology</p>  
            </div>

            <div className="Neurology">
                <img src={vector} alt="" />
                <p className="neuro">Neurology</p>  
            </div>

            <div className="Neurology">
                <img src={vector} alt="" />
                <p className="neuro">Neurology</p>  
            </div>  

            </div>

            <div className="spl1">

            <div className="Neurology">
                <img src={vector} alt="" />
                <p className="neuro">Neurology</p>  
            </div>

            <div className="Neurology">
                <img src={vector} alt="" />
                <p className="neuro">Neurology</p>  
            </div>

            <div className="Neurology">
                <img src={vector} alt="" />
                <p className="neuro">Neurology</p>  
            </div>

            <div className="Neurology">
                <img src={vector} alt="" />
                <p className="neuro">Neurology</p>  
            </div>  

            </div>


            </div>



          
        </div>
    );
};



export default service;