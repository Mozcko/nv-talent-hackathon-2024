import { useState } from 'react';
import { Card, Avatar, Badge } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { user_tags, user_cardData } from "../constants";
import { 
  insignia1,
  insignia2,
  insignia3,
  insignia4,
  insignia5,
  insignia6,
  insignia7,
  insignia8,  
} from "../assets";

import { maryFernandez, llave_coppel } from "../assets";

const UserCard = () => {
    const [showPopover, setShowPopover] = useState(false);

    return (
        <Card className="top-16 mx-10 max-w-xs" imgSrc={maryFernandez}>
            <h5 className="mb-1 text-center text-base font-bold tracking-tight text-black-100 dark:text-white">María Fernández</h5>
            <p className="text-center font-normal text-black dark:text-gray-400">Florista</p>
            <p className="text-center font-normal text-black-200 dark:text-gray-400">@MaryFernandez</p>
            <div className="flex items-center justify-center relative">
                <img
                    src={llave_coppel}
                    alt="Llave Coppel"
                    className="w-6 h-6 mr-1 cursor-pointer"
                    onMouseEnter={() => setShowPopover(true)}
                    onMouseLeave={() => setShowPopover(false)}
                />
                {showPopover && (
                    <div className="absolute z-10 bg-gray-800 text-white text-xs px-2 py-1 rounded-md -top-8 left-1/2 transform -translate-x-1/2">
                        Llaves de Coppel Emprende
                    </div>
                )}
                <span className="text-black-200 dark:text-gray-400">250</span>
            </div>
        </Card>
    );
};

const Tag = ({ text, color, pill }) => {
  return (
    <Badge size="md" pill={pill} className={`${color} mr-3 mt-3 text-white`}>
      {text}
    </Badge>
  );
};

const UserProfile = () => {
    return(
      <>
          <div className="mb-5 flex flex-col lg:flex-row items-start justify-start">
            <UserCard />
            <div className="mt-0">
              <div className="m-10 flex flex-wrap items-center">
                {user_tags.map((tag, index) => (
                  <Tag key={index} text={tag.text} color={tag.color} />
                ))}
              </div>
              <motion.div 
                className="mb-5 ml-5 flex items-center flex-col lg:flex-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="ml-5 mr-3" size="2xl" style={{color: "#f8d835"}}/>
                  <p className="text-xl">Guadalajara, México</p>
                </div>
                <div className="mt-5 lg:ml-16 lg:flex items-end z-0">
                  <Avatar.Group>
                    <Avatar img={insignia1} rounded stacked />
                    <Avatar img={insignia3} rounded stacked />
                    <Avatar img={insignia4} rounded stacked />
                    <Avatar img={insignia5} rounded stacked />
                    <Avatar img={insignia6} rounded stacked />
                    <Avatar img={insignia7} rounded stacked />
                    <Avatar img={insignia8} rounded stacked />
                    <Avatar img={insignia2} rounded stacked />
                  </Avatar.Group>
                </div>
              </motion.div>
              <div className="items-center">
                <p className="m-10 text-lg">Florista apasionada en Guadalajara, especializada en crear arreglos florales únicos para eventos especiales. 
                  Convierto emociones en obras de arte floral, desde bodas hasta eventos corporativos. 
                  Déjame hacer de tu próximo momento especial una experiencia inolvidable con mis diseños florales.
                </p>
              </div>
              
              <div className="flex items-center space-x-7 ml-10">
                <a href="#" className="text-green-500 hover:text-green-600">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[4rem]" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                    <FontAwesomeIcon icon={faFacebook} className="text-6xl" />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                    <FontAwesomeIcon icon={faInstagram} className="text-[4rem]" />
                </a>
              </div>
              
            </div>
          </div>  
          <div className="mt-10 text-2xl text-center mx-auto my-4 text-bold">
            <p className='text-bold text-5xl'>Mis Publicaciones</p>
          </div>
          {/* Aquí agregamos el botón de "Añadir Publicación" */}
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Añadir Publicación
            </button>
          </div>
          {/* Aquí termina el botón de "Añadir Publicación" */}
          <div className="mt-10 flex flex-wrap justify-center">
            {user_cardData.map((card, index) => (
              <motion.div 
                key={index}
                className="max-w-sm m-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Añade un retraso dinámico
              >
                <Card imgSrc={card.imageSrc} horizontal>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {card.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                  </p>
                </Card>
              </motion.div>
              ))}
          </div>
      </>
      )
}

export default UserProfile;

