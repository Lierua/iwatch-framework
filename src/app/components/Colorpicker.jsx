const ColorPicker = ({ isSelected }) => {
  return (
    <div className="colorPicker">
      <span data-colorPicked={isSelected}></span>
      <span data-colorPicked={isSelected}></span>
      <span data-colorPicked={isSelected}></span>
    </div>
  );
};

export default ColorPicker;
