import Image from "next/image";
import gray from "../../../public/images/grayImage.png";
import teal from "../../../public/images/tealImage.png";
import pink from "../../../public/images/pinkImage.png";
const icons = {
  gray,
  teal,
  pink,
};
import ColorPicker from "./Colorpicker";

const ShowCase = ({ isSelected }) => {
  const selectedImage = icons[isSelected];
  return (
    <div className="showCase">
      <Image src={selectedImage} alt="iwatch photo" />
      <ColorPicker isSelected={isSelected} />
    </div>
  );
};

export default ShowCase;
