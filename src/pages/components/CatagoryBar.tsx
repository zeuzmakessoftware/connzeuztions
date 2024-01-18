interface CatagoryBarProps {
    mainValue: string;
    subValue: string;
    color: number;
  }
  
  const CatagoryBar: React.FC<CatagoryBarProps> = ({ mainValue, subValue, color }) => {
    if (mainValue == "")
    return (
      <div>
      </div>
    );
    else {
      if (color == 0) {
      return (
      <div className="flex justify-center items-center h-full py-[3px]">
        <div className={`bg-yellow-500 w-[332px] h-[100px] rounded-lg text-center flex flex-col justify-center items-center`}>
          <h3 className="font-black text-lg">{mainValue}</h3>
          <h3 className="font-semibold text-xl">{subValue}</h3>
        </div>
      </div>
      );
      }
      else if (color == 1) {
      return (
      <div className="flex justify-center items-center h-full py-[3px]">
        <div className={`bg-green-500 w-[332px] h-[100px] rounded-lg text-center flex flex-col justify-center items-center`}>
          <h3 className="font-black text-lg">{mainValue}</h3>
          <h3 className="font-semibold text-xl">{subValue}</h3>
        </div>
      </div>
      );
      }
      else if (color == 2) {
      return (
      <div className="flex justify-center items-center h-full py-[3px]">
        <div className={`bg-blue-500 w-[332px] h-[100px] rounded-lg text-center flex flex-col justify-center items-center`}>
          <h3 className="font-black text-lg">{mainValue}</h3>
          <h3 className="font-semibold text-xl">{subValue}</h3>
        </div>
      </div>
      );
      }
      else if (color == 3) {
      return (
      <div className="flex justify-center items-center h-full py-[3px]">
        <div className={`bg-purple-500 w-[332px] h-[100px] rounded-lg text-center flex flex-col justify-center items-center`}>
          <h3 className="font-black text-lg">{mainValue}</h3>
          <h3 className="font-semibold text-xl">{subValue}</h3>
        </div>
      </div>
      );
      }
  }
  }
  
  export default CatagoryBar;