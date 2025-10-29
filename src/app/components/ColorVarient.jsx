import Image from "next/image";

import gray from "../../../public/images/gray.png";
import teal from "../../../public/images/teal.png";
import pink from "../../../public/images/pink.png";
const icons = {
  gray,
  teal,
  pink,
};

const ColorVarient = ({ color }) => {
  const selectedImage = icons[color] || gray;

  return (
    <div className="colorVarient" data-color={color}>
      <Image src={selectedImage} alt={`${color} iwatch photo`} />
      <div className="box"></div>
    </div>
  );
};

export default ColorVarient;
