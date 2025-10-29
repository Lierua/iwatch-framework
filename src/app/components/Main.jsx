import TitleSection from "./TitleSection";
import Title from "./Title";
import Button from "./Button";
import ImageSection from "./ImageSection";

const Main = ({ children }) => {
  return (
    <div className="mainGrid">
      <TitleSection></TitleSection>
      <ImageSection></ImageSection>
    </div>
  );
};

export default Main;
