import Image from "next/image";
import iwatch from "../../../public/images/iwatch.png";
import ColorPicker from "./Colorpicker";

const ShowCase = () => {
  return (
    <div className="showCase">
      <Image src={iwatch} alt="iwatch photo" />
      <ColorPicker />
    </div>
  );
};

export default ShowCase;
