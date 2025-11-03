import ColorVarient from "./ColorVarient";

const Selection = ({ isSelected, setIsSelected }) => {
  return (
    <div className="selection">
      <ColorVarient
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        color="gray"
      />
      <ColorVarient
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        color="teal"
      />
      <ColorVarient
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        color="pink"
      />
    </div>
  );
};

export default Selection;
