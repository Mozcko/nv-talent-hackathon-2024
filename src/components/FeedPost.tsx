import { faPaperPlane, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button, TextInput } from "flowbite-react";
import { Img } from "react-image";
import { logo } from "../assets";
import Tag from "./Tag"; // Import your custom Tag component

const FeedPost = ({ user, friendStatus }) => {
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

        {/* Display the tags using your custom Tag component */}
        <div className="flex flex-wrap justify-center mt-3">
          {user.tags.map((tag, index) => (
            <Tag key={index} text={tag} color="blue-gray" />
          ))}
        </div>

        <div className="mt-4 flex space-x-3 lg:mt-6">
          <Button
            onClick={() => {}}
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            {friendStatus}
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