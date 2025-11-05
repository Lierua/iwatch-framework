import Arrows from "./Arrows";
import Button from "./Button";
import Title from "./Title";

const TitleSection = ({ children }) => {
  return (
    <div className="h-[80vh] gap-6 flex flex-col">
      <Title />
      <Button />
      <Arrows />
    </div>
  );
};

export default TitleSection;
