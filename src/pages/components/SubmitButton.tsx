interface SubmitButtonProps {
    value: string;
    onClick: (type: string) => void;
    active: boolean;
  }
  
  const SubmitButton: React.FC<SubmitButtonProps> = ( {value, onClick, active} ) => {
    if (active) {
    return (
      <button onClick={() => onClick(value)} className="border-[1px] rounded-full bg-gray-900 w-28 h-10 border-black font-bold text-sm text-white">{value}</button>
      );
    }
    else {
      return (
      <button className="border-[1px] rounded-full bg-white w-28 h-10 border-gray font-bold text-sm text-gray-400 cursor-default">{value}</button>
      );
    }
  }
  
  export default SubmitButton;