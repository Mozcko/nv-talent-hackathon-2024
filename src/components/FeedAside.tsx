import { Avatar } from "flowbite-react";
import { logo } from "../assets";

const Aside = () => {
  return (
    <div className="sticky top-4 max-w-[200px] w-full mx-auto hidden lg:block border-r border-gray-200 pr-4">
      <div className="flex items-center mb-4">
        <Avatar
          rounded={true}
          size="lg"
          src={logo}
          alt="User"
        />
        <div className="ml-4">
          <h5 className="text-xl font-bold text-gray-800">Bonnie Green</h5>
          <p className="text-gray-500">Visual Designer</p>
        </div>
      </div>
      <div className="mb-4">
        <h6 className="text-gray-800 font-semibold">Clientes</h6>
        <ul className="text-gray-600 list-inside list-disc">
          <li>Repostería</li>
          <li>Cocina</li>
          <li>Materia Prima</li>
          <li>Perecederos</li>
          <li>Abarrotes</li>
        </ul>
      </div>
      <div>
        <h6 className="text-gray-800 font-semibold">Intereses</h6>
        <ul className="text-gray-600 list-inside list-disc">
          <li>Entrega a Domicilio</li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;