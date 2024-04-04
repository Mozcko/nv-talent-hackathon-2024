import { useState } from 'react';
import { maryFernandez, llave_coppel } from "../assets";
import { Card } from "flowbite-react";

const UserCard = () => {
    const [showPopover, setShowPopover] = useState(false);

    return (
        <Card className="sticky top-16 mx-10 max-w-xs" imgSrc={maryFernandez}>
            <h5 className="mb-1 text-center text-base font-bold tracking-tight text-black-100 dark:text-white">María Fernández</h5>
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
                <span className="text-black-200 dark:text-gray-400">50</span>
            </div>
        </Card>
    );
};

export default UserCard;
