import Arrows from "./Arrows";
import Button from "./Button";
import Title from "./Title";

const TitleSection = ({ children }) => {
  return (
    <div className="titleSection">
      <Title />
      <Button />
      <Arrows />
    </div>
  );
};

export default TitleSection;
