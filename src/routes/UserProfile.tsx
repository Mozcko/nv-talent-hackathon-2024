import { maryFernandez } from "../assets"
import { Card, Rating } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { floreria } from "../assets";

import { Badge } from "flowbite-react";

const Tag = ({ text, color, pill }) => {
  return (
    <Badge size="md" pill={pill} className={`${color} mr-3 mt-3 text-white`}>
      {text}
    </Badge>
  );
};

const UserProfile = () => {
    const cardData = [
        {
          "title": "Nueva floreria abierta",
          "description": "una nueva oportunidad surge, mi negocio crece y con ello mis sueños de seguir adelante",
          "imageSrc": floreria
        },
        {
            "title": "Nueva floreria abierta",
            "description": "una nueva oportunidad surge, mi negocio crece y con ello mis sueños de seguir adelante",
            "imageSrc": floreria
        },
        {
            "title": "Nueva floreria abierta",
            "description": "una nueva oportunidad surge, mi negocio crece y con ello mis sueños de seguir adelante",
            "imageSrc": floreria
        },
        {
            "title": "Nueva floreria abierta",
            "description": "una nueva oportunidad surge, mi negocio crece y con ello mis sueños de seguir adelante",
            "imageSrc": floreria
        },
        // Añade más objetos de carta si lo deseas
      ]

    const tags = [
        {
            text: "Front-End Developer",
            color: "bg-primary",
            pill: true
        },
        {
            text: "JavaScript",
            color: "bg-primary",
            pill: true
        },
        {
            text: "React",
            color: "bg-primary",
            pill: true
        },
        {
            text: "Redux",
            color: "bg-primary",
            pill: true
        },
        {
            text: "Node.js",
            color: "bg-primary",
            pill: true
        },
        {
            text: "Express.js",
            color: "bg-primary",
            pill: true
        },
        {
            text: "MongoDB",
            color: "bg-primary",
            pill: true
        },
        {
            text: "PostgreSQL",
            color: "bg-primary",
            pill: true
        },
        {
            text: "GraphQL",
            color: "bg-primary",
            pill: true
        },
    ]

    return(
    <>
        <div className="mb-5 flex flex-col lg:flex-row items-start justify-start">
          <Card className="mt-10 mx-10 max-w-xs lg:mr-10 mb-5 lg:mb-0" imgSrc={maryFernandez}>
            <h5 className="mb-1 text-center text-base font-bold tracking-tight text-black-100 dark:text-white">María Fernández</h5>
            <p className="text-center font-normal text-black-200 dark:text-gray-400">@MaryFernandez</p>
            <div className='mx-auto'>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
            </div>
          </Card>
          <div className="mt-0">
            <div className="m-10 flex flex-wrap items-center">
              {tags.map((tag, index) => (
                <Tag key={index} text={tag.text} color={tag.color} />
              ))}
            </div>
            <div className="mb-5 ml-5 flex items-center">
              <FontAwesomeIcon icon={faLocationDot} className="ml-5 mr-3" size="2xl" style={{color: "#f8d835"}}/>
              <p className="text-xl">Guadalajara, México</p>
            </div>
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
        {cardData.map((card, index) => (
            <Card key={index} className="max-w-sm m-4" imgSrc={card.imageSrc} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {card.description}
            </p>
            </Card>
        ))}
        </div>
    </>
    )
}

export default UserProfile
