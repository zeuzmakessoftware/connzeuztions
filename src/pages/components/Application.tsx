import React, { useState, useEffect } from 'react';
import ButtonGrid from "./ButtonGrid";
import ActionButtons from "./ActionButtons";
import TopBar from "./TopBar";
import CatagoryBar from "./CatagoryBar";
import MistakeCounter from "./MistakeCounter";

interface InitialValuesProps {
    [key: string]: string[];
}

interface GuessProps {
    values: string;
    key: string;
  }

const Application = () => {
  const INITIAL_VALUES: InitialValuesProps = {
    "COLORS": ["ORANGE", "BLACK", "AQUA", "MAROON"],
    "FLOWERS": ["DAISY", "ROSE", "TULIP", "LILY"],
    "YELLOW _____": ["JACKET", "SUBMARINE", "CONE", "TAPE"],
    "INGREDIENTS": ["CHOCOLATE", "VANILLA", "FLOUR", "SUGAR"]
  };

  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [shuffledGroups, setShuffledGroups] = useState<string[][]>([]);
  const [submitActive, setSubmitActive] = useState(false);
  const [correctGuessInfo, setCorrectGuessInfo] = useState<GuessProps[]>([]);
  const [mistakesAllowed, setMistakesAllowed] = useState(4);
  const colors = [0, 1, 2, 3];
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    shuffleGroups();
  }, []);

  useEffect(() => {
    if (selectedValues.length == 4) {
      setSubmitActive(true);
    }
    else {
      setSubmitActive(false);
    }
  }, [selectedValues, setSubmitActive])

  const shuffleArray = (array: string[]): string[] => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }

    return array;
  };

  const shuffleGroups = () => {
    const allValues = shuffledGroups.flat().length > 0 ? shuffledGroups.flat() : Object.values(INITIAL_VALUES).flat();
    const shuffled = shuffleArray([...allValues]);
    
    const newGroups = [];
    for (let i = 0; i < shuffled.length; i += 4) {
      newGroups.push(shuffled.slice(i, i + 4));
    }
    
    setShuffledGroups(newGroups);
};

const removeSelectedFromGroups = () => {
    setShuffledGroups(prevGroups => {
      return prevGroups.map(group => group.filter(value => !selectedValues.includes(value)));
    });
  };

    const checkAnswer = () => {
      let isCorrect = false;
    
      for (const key in INITIAL_VALUES) {
        const values = INITIAL_VALUES[key];
        
        if (selectedValues.every(value => values.includes(value))) {
            setCorrectGuessInfo(prev => [...prev, { values: values.join(", "), key }]);
          isCorrect = true;
          break;
        }
      }
      
      if (isCorrect) {
        removeSelectedFromGroups();
        if (Object.keys(INITIAL_VALUES).length === correctGuessInfo.length + 1) {
            setGameOver(true);
        }
      } else {
        if (mistakesAllowed != 1) {
          setMistakesAllowed(mistakesAllowed - 1)
        }
        else {
          setMistakesAllowed(mistakesAllowed - 1)
          setGameOver(true);
        }
      }
    }

  const handleButtonClick = (value: string) => {
    if (selectedValues.includes(value) && !gameOver) {
      setSelectedValues(prev => prev.filter(v => v !== value));
    } else if (selectedValues.length < 4 && !gameOver) {
      setSelectedValues(prev => [...prev, value]);
    }
  };

  const handleActionClick = (type: string) => {
    if (!gameOver) {
      switch (type) {
        case "Shuffle":
          shuffleGroups();
          break;
        case "Deselect All":
          setSelectedValues([]);
          break;
        case "Submit":
          checkAnswer();
          setSelectedValues([]);
          break;
        default:
          console.log("Unknown action:", type);
      }
    }
  };

  return (
    <div>
      <TopBar />
      <div className="py-[30px]">
        {correctGuessInfo.map((info, index) => (
            <CatagoryBar 
                key={index}
                mainValue={info.values}
                subValue={info.key}
                color={colors[index]}
            />
        ))}
        
        {gameOver && (Object.keys(INITIAL_VALUES).length === correctGuessInfo.length + 1) && 
          Object.entries(INITIAL_VALUES).map(([key, value], index) => (
            <CatagoryBar 
              key={key}
              mainValue={value.join(", ")}
              subValue={key}
              color={colors[index]}
            />
          ))
        }
      </div>

      <div className="flex items-center justify-center">
        {!gameOver &&
          <ButtonGrid 
            values={shuffledGroups.flat()} 
            selectedValues={selectedValues}
            onButtonClick={handleButtonClick}
          />
        }
      </div>

      <MistakeCounter mistakesAllowed={mistakesAllowed} />
      <ActionButtons onClick={handleActionClick} active={submitActive} />
    </div>
  );
};

export default Application;