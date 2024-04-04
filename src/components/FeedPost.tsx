import React, { useRef } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button, TextInput } from "flowbite-react";
import { Img } from "react-image";
import { llave_coppel } from "../assets";

import { Badge } from "flowbite-react";

const Tag = ({ text, color, pill }) => {
  return (
    <Badge pill={pill} className={`${color} ml-1 mt-3 text-white-100 text-xs`}>
      {text}
    </Badge>
  );
};

const FeedPost = ({ user }) => {
  const popoverRef = useRef(null);

  const handleMouseEnter = () => {
    popoverRef.current.style.display = "block";
  };

  const handleMouseLeave = () => {
    popoverRef.current.style.display = "none";
  };

  const tagsArray = Object.values(user.tags);

  return (
    <Card className="max-w-sm mt-4">
      <div className="flex justify-end px-4 pt-4">
      </div>
      <div className="flex flex-col items-center pb-10">
        <Img
          alt="Bonnie image"
          height="96"
          src={user.image}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.job}
        </span>

        <div
          className="flex items-center justify-center relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={llave_coppel}
            alt="Llave Coppel"
            className="w-6 h-6 mr-1 cursor-pointer"
          />
          <div
            ref={popoverRef}
            className="absolute z-10 bg-gray-800 text-white text-xs px-2 py-1 rounded-md -top-8 left-1/2 transform -translate-x-1/2"
            style={{ display: "none" }}
          >
            Llaves de Coppel Emprende
          </div>
          <span className="text-black-200 dark:text-gray-400">{user.keys}</span>
        </div>

        {/* Display the tags using your custom Tag component */}
        <div className="flex flex-wrap justify-center mt-3">
          {tagsArray.map((tag, index) => (
            <Tag key={index} text={tag} color="bg-fill-300" />
          ))}
        </div>

        <div className="mt-4 flex space-x-3 lg:mt-6">
          <Button
            onClick={() => {}}
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add Friend
          </Button>
        </div>
        <form className=" mt-4 flex flex-1">
          <TextInput type="text" placeholder="Get in Touch" />
          <Button color="gray" className="px-3 ml-2">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default FeedPost;
