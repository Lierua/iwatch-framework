"use client";
import { useState } from "react";
import ShowCase from "./ShowCase";
import Selection from "./Selection";

const ImageSection = () => {
  const [isSelected, setIsSelected] = useState("gray");
  return (
    <div className="ImageSection">
      <ShowCase isSelected={isSelected} setIsSelected={setIsSelected} />
      <Selection isSelected={isSelected} setIsSelected={setIsSelected} />
    </div>
  );
};

export default ImageSection;
