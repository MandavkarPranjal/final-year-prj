import React from 'react';
import './Card.css';

interface CardProps {
    image?: string;
    name: string;
    specialization: string;
}

const Card: React.FC<CardProps> = ({ image, name, specialization }) => {
    return (
        <div className="card">
            <img className='image' src={image} alt={name} />
            <label className='name'>{name}</label>
            <label className='spl'>{specialization}</label>
        </div>
    );
};


export default Card;