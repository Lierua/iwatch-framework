import ShowCase from "./ShowCase";
import Selection from "./Selection";

const ImageSection = ({ children }) => {
  return (
    <div className="ImageSection">
      <ShowCase />
      <Selection />
    </div>
  );
};

export default ImageSection;
