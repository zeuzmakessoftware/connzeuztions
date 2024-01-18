interface ActionButtonProps {
    value: string;
    onClick: (type: string) => void;
  }
  
  const ActionButton: React.FC<ActionButtonProps> = ( {value, onClick} ) => {
    return (
      <button onClick={() => onClick(value)} className="border-[1px] rounded-full bg-white w-28 h-10 border-black font-bold text-sm">{value}</button>
      );
  }
  
  export default ActionButton;