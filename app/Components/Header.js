// Header.js
"use client";
import React, { useState } from "react";

const Header = () => {
  const [player, setPlayer] = useState("X");
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [winner, setwinner] = useState(null);

  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleGame = (index) => {
    if (boxes[index] === "" && !winner) {
      const newBoxes = [...boxes];
      newBoxes[index] = player;
      setBoxes(newBoxes);
      setPlayer(player === "X" ? "Y" : "X");

      if (checkWinner(newBoxes, player)) {
        setwinner(player); 
      } else {
        setPlayer(player === "X" ? "Y" : "X"); 
      }
    }
  };

  const checkWinner = (boxes, currentPlayer) => {
    return positions.some((combination) => {
      return combination.every((index) => boxes[index] === currentPlayer);
    });
  };

  const handleRestart = () => {
    setBoxes(Array(9).fill(""));
    setPlayer("X");
    setwinner(null);
  };

  return (
    <>
      <h1 className="text-3xl text-white text-center">{winner ? `Winner : ${winner}` : `your Turn ${player}`}</h1>
      <div className="flex justify-center items-center flex-wrap gap-4 text-[#16bdca] w-[370px] ml-[460px] mt-[50px]">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="p-4 border-2 border-[#16bdca] w-[100px] h-[70px] text-center rounded-[14px] flex items-center justify-center cursor-pointer text-[#16bdca] text-2xl font-semibold"
            onClick={() => handleGame(index)}
          >
            {box} {}
          </div>
        ))}
      </div>
      <button
        className="border-2 border-[#16bdca] text-[#16bdca] p-2 text-center rounded ml-[607px] mt-[15px] text-xl font-semibold"
        onClick={handleRestart}
      >
        Restart
      </button>
    </>
  );
};

export default Header;
