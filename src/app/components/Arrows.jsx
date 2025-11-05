import Image from "next/image";
import Arrow from "../../../public/images/arrow.svg";

const Arrows = () => {
  return (
    <div className="w-fit flex gap-8 mt-auto mx-4  [&>img]:self-center [&>img]:scale-[2]">
      <Image src={Arrow} alt="arrow" />
      <p className="text-4xl">1</p>
      <Image className="rotate-180" src={Arrow} alt="arrow" />
    </div>
  );
};

export default Arrows;
