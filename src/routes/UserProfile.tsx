import { Card } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { UserCard } from "../components";
import { motion } from "framer-motion";
import { user_tags, user_cardData } from "../constants";

import { Badge } from "flowbite-react";

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
                className="mb-5 ml-5 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={faLocationDot} className="ml-5 mr-3" size="2xl" style={{color: "#f8d835"}}/>
                <p className="text-xl">Guadalajara, México</p>
              </motion.div>
              <div className="items-center">
                <p className="m-10 text-lg">Florista apasionada en Guadalajara, especializada en crear arreglos florales únicos para eventos especiales. 
                  Convierto emociones en obras de arte floral, desde bodas hasta eventos corporativos. 
                  Déjame hacer de tu próximo momento especial una experiencia inolvidable con mis diseños florales.
                </p>
              </div>
              <div className="flex space-x-7 ml-10">
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

export default UserProfile
