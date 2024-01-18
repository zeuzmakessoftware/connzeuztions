import { useState, useEffect } from 'react';

interface ConnectButtonProps {
  value: string;
  clicked: boolean;
  onButtonClick: (status: boolean) => void;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ value, clicked, onButtonClick }) => {
  
  const [buttonColors, setButtonColors] = useState(clicked ? 1 : 0);

  const handleClick = (event: React.MouseEvent) => {
    if (buttonColors === 1) {
      onButtonClick(false);
      setButtonColors(0);
    } else {
      onButtonClick(true);
      setButtonColors(1);
    }
  };

  useEffect(() => {
    setButtonColors(clicked ? 1 : 0);
  }, [clicked]);

  if (!clicked) {
  return (
    <div>
      <button 
        onClick={handleClick} 
        className={`bg-stone-300 w-20 h-20 rounded-lg text-[0.7rem] font-extrabold text-gray-900`}
      >
        {value}
      </button>
    </div>
  );
  }
  else {
    return (
    <div>
      <button 
        onClick={handleClick} 
        className={`bg-stone-800 w-20 h-20 rounded-lg text-[0.7rem] font-extrabold text-gray-100`}
      >
        {value}
      </button>
    </div>
  );
  }
};

export default ConnectButton;