interface MistakeCounterProps {
    mistakesAllowed: number;
  }
  
  const MistakeCounter: React.FC<MistakeCounterProps> = ( {mistakesAllowed} ) => {
    const ellipsesCx = Array.from({ length: mistakesAllowed }, (_, i) => 10 + i * 30);
  
    return (
      <div className="flex justify-center items-center py-4">
        <h3 className="font-normal">Mistakes remaining:</h3>
        <svg height="20" width={10 + mistakesAllowed * 30} className="ml-2">
          {ellipsesCx.map(cx => (
            <ellipse key={cx} cx={cx} cy="10" rx="9" ry="9" />
          ))}
        </svg>
      </div>
    );
  }
  
  export default MistakeCounter;
  