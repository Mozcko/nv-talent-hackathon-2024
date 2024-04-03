import { Badge } from "flowbite-react";

const Tag = ({ text, color, pill }) => {
  return (
    <Badge pill={pill} className={`bg-${color} ml-1 mt-3 text-black-100`}>
      {text}
    </Badge>
  );
};

export default Tag;