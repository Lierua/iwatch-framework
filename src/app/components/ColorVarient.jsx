import Image from "next/image";

import gray from "../../../public/images/gray.png";
import teal from "../../../public/images/teal.png";
import pink from "../../../public/images/pink.png";
const icons = {
  gray,
  teal,
  pink,
};

const ColorVarient = ({ color, isSelected, setIsSelected }) => {
  const selectedImage = icons[color] || gray;

  return (
    <div
      onClick={() => setIsSelected(color)}
      className="w-full grid transition-all duration-200 ease hover:scale-[1.1] gap-4"
      data-color={color}
    >
      <Image className="mx-auto " src={selectedImage} alt={`${color} iwatch photo`} />
      <div className={`bg-iwatch-${color} w-full h-[70px] mt-[-4rem] z-[-1] opacity-60 rounded-3xl`}></div>
    </div>
  );
};

export default ColorVarient;
