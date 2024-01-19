import React from 'react';
import './Card.css';
import Rectangle20 from './../../../public/images/Rectangle20.jpg';

interface CardProps {
    image?: string;
    name: string;
    specialization: string;
}

const Card: React.FC<CardProps> = ({ image, name, specialization }) => {
    return (
        <div className="card">
            <img className='image' src={Rectangle20} alt={name} />
            <label className='name'>{name}</label>
            <label className='spl'>{specialization}</label>
        </div>
    );
};




export default Card;