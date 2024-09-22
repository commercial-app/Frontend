// Dice.tsx
import React, { useState } from "react";

interface DiceProps {
  onRoll: (value: number) => void; // 주사위 값을 전달하는 콜백 함수
}

const Dice: React.FC<DiceProps> = ({ onRoll }) => {
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      onRoll(randomValue); // 주사위 값을 부모에게 전달
      setIsRolling(false);
    }, 1000); // 1초 동안 굴리는 애니메이션
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={rollDice}
        disabled={isRolling}
        className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg ${
          isRolling ? "cursor-not-allowed opacity-50" : "hover:bg-blue-600"
        } transition duration-200`}
      >
        {isRolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  );
};

export default Dice;
