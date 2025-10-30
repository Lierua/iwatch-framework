"use client";
import { useState } from "react";
import ShowCase from "./ShowCase";
import Selection from "./Selection";

const ImageSection = () => {
  const [isSelected, setIsSelected] = useState("teal");
  return (
    <div className="ImageSection">
      <ShowCase isSelected={isSelected} />
      <Selection isSelected={isSelected} setIsSelected={setIsSelected} />
    </div>
  );
};

export default ImageSection;
