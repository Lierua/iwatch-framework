const ColorPicker = (isSelected) => {
  return (
    <div data-colorPicked={isSelected} className="colorPicker">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ColorPicker;
