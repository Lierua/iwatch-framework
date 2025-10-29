import Image from "next/image";
import Arrow from "../../../public/images/arrow.svg";

const Arrows = () => {
  return (
    <div className="arrows">
      <Image src={Arrow} alt="arrow" />
      <p>1</p>
      <Image src={Arrow} alt="arrow" />
    </div>
  );
};

export default Arrows;
