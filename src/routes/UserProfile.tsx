import { maryFernandez } from "../assets"
import { Card, Rating } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

//import { Badge } from "flowbite-react";

// const Tag = ({ text, color, pill }) => {
//   return (
//     <Badge pill={pill} className={`bg-fill-100 ml-1 mt-3 text-white`}>
//       {text}
//     </Badge>
//   );
// };

const UserProfile = () => {
    return(
      <>
        <div className="mb-5 flex flex-row items-start justify-start">
        <Card className="sticky top-16 mx-10 max-w-xs" imgSrc={maryFernandez}>
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
                <div className="m-10 flex items-center">
                    <p>Aqui van las tags</p>
                </div>
                <div className="mb-5 ml-5 flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="ml-5 mr-3" size="2xl" style={{color: "#f8d835",}}/>
                    <p className="text-xl">Guadalajara, México</p>
                </div>
                <div className="items-center">
                    <p className="m-10 text-lg">Florista apasionada en Guadalajara, especializada en crear arreglos florales únicos para eventos especiales. 
                            Convierto emociones en obras de arte floral, desde bodas hasta eventos corporativos. 
                            Déjame hacer de tu próximo momento especial una experiencia inolvidable con mis diseños florales.
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
       </>  
    )
}

export default UserProfile