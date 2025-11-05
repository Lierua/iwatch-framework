import ColorVarient from "./ColorVarient";

const Selection = ({ isSelected, setIsSelected }) => {
  return (
    <div className="flex w-full mx-auto my-0 gap-8 justify-between">
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
