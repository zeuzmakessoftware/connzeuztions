import React from 'react';
import ConnectButton from "./ConnectButton";

interface ButtonGridProps {
  values: string[];
  selectedValues: string[];
  onButtonClick: (value: string) => void;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ values = [], selectedValues = [], onButtonClick }) => (
    <div className="grid grid-cols-4 gap-1">
      {(values || []).map((value, index) => (
        <ConnectButton
          key={value}
          value={value}
          clicked={selectedValues.includes(value)}
          onButtonClick={() => onButtonClick(value)} 
        />
      ))}
    </div>
  );

export default ButtonGrid;