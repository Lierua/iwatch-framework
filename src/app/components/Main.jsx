import TitleSection from "./TitleSection";
import Title from "./Title";
import Button from "./Button";
import ImageSection from "./ImageSection";

const Main = ({ children }) => {
  return (
    <div className="my-0 mx-auto grid grid-cols-[3fr_2fr] max-w-[1200px]">
      <TitleSection></TitleSection>
      <ImageSection></ImageSection>
    </div>
  );
};

export default Main;
