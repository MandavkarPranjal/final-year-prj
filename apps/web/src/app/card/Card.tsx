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


//     const App: React.FC = () => {
//       const [userData, setUserData] = useState({
//         image: 'logo192.png',
//        name: '',
//         specialization: 'this this',
//       });
   
//       return (
//         <Card
//           image={userData.image}
//           name={userData.name}
//           specialization={userData.specialization}
//         />
     
 
//   );


export default Card;