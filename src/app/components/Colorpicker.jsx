"useclient";
import { useState, useEffect } from "react";

const ColorPicker = ({ isSelected, setIsSelected }) => {
  const [gray, setGray] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    if (isSelected === "gray") {
      setGray(true);
    } else {
      setGray(false);
    }
  }, [isSelected]);

  function functionRotate() {
    setRotate(!rotate);
  }

  return (
    <div className={`colorPicker ${rotate ? "go" : ""}`}>
      <span
        onClick={() => {
          setIsSelected("gray");
          functionRotate();
        }}
        className={`colorVarient ${gray ? "hello" : ""}`}
        data-colorPicked={isSelected}
      ></span>
      <span
        onClick={() => setIsSelected("teal")}
        className="colorVarient"
        data-colorPicked={isSelected}
      ></span>
      <span
        onClick={() => setIsSelected("pink")}
        className="colorVarient"
        data-colorPicked={isSelected}
      ></span>
    </div>
  );
};

export default ColorPicker;
