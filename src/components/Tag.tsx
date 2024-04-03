import { Badge } from "flowbite-react";

const Tag = ({ text, color, pill }) => {
  return (
    <Badge pill={pill} className={`bg-fill-100 ml-1 mt-3 text-white`}>
      {text}
    </Badge>
  );
};

export default Tag;