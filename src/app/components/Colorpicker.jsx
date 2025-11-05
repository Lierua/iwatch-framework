"useclient";

const ColorPicker = ({ isSelected, setIsSelected }) => {
  return (
    <div className={`after:content-[''] after:h-[110px] after:absolute after:z-[-1] after:left-[50%] after:[border-left:3px_dotted_white]
    w-[30px] my-auto mx-0 h-fit flex gap-6 relative flex-col items-center [&>span]:rounded-[100px] [&>span]:border-4 [&>span]:border-white`}>
      <span
        onClick={() => setIsSelected("gray")}
        className={`bg-iwatch-gray transition-all duration-300 ease-in hover:h-[28px] hover:w-[28px] hover:shadow-[0_3px_8px_#434558] 
          ${isSelected == "gray" ? "h-[30px] w-[30px] shadow-[0_5px_10px_#434558]" : "h-[22px] w-[22px]"}`}
      ></span>
      <span
        onClick={() => setIsSelected("teal")}
        className={`bg-iwatch-teal transition-all duration-300 ease-in hover:h-[28px] hover:w-[28px] hover:shadow-[0_3px_8px_#434558] 
          ${isSelected == "teal" ? "h-[30px] w-[30px] shadow-[0_5px_10px_#434558]" : "h-[22px] w-[22px]"}`}
      ></span>
      <span
        onClick={() => setIsSelected("pink")}
        className={`bg-iwatch-pink transition-all duration-300 ease-in hover:h-[28px] hover:w-[28px] hover:shadow-[0_3px_8px_#434558] 
          ${isSelected == "pink" ? "h-[30px] w-[30px] shadow-[0_5px_10px_#434558]" : "h-[22px] w-[22px]"}`}
      ></span>
    </div>
  );
};

export default ColorPicker;
