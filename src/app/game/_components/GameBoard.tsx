// GameBoard.tsx
"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import Dice from "react-dice-roll";

const URL = "http://localhost:3004/boards";

interface TileProps {
  tile_id: number;
  order: number;
  state: boolean;
  mission: {
    mission_id: number;
    title: string;
    content: string;
    image_url: string;
    category_name: string;
  };
}

export default function GameBoard() {
  const [position, setPosition] = useState(0);
  const [tiles, setTiles] = useState<TileProps[]>([]);
  const [randomNum, setRandomNum] = useState(0); // 주사위 숫자 상태 추가

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res = await axios.get(URL);
        setPosition(res.data[0].member_position);
        setTiles(res.data[0].tiles);
      } catch (err) {
        console.error("GET for Board Info - failed", err);
      }
    };
    fetchBoard();
  }, []);

  const handleRoll = (value: number) => {
    setRandomNum(value); // 주사위 숫자 상태 업데이트
    setPosition((prev) => (prev + value) % tiles.length); // 사용자 다음 위치 업데이트
  };

  return (
    <main className="border rounded-lg shadow-lg lg:w-[1400px] flex flex-col my-[20px]">
      <div className="flex">
        <div className="bg-red-600 w-[95px] lg:w-[180px] h-[80px] lg:h-[150px] flex flex-col justify-center items-center rounded-l-lg">
          <Image
            src="/gameBoard/startKNU.jpg"
            width={60}
            height={60}
            alt="start"
            className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full"
          />
          <h1 className="text-[18px] font-semibold text-white">Start</h1>
        </div>
        <section className="border flex-grow h-[80px] lg:h-[150px] flex justify-evenly bg-gray-100 rounded-r-lg shadow-inner">
          {tiles.slice(0, 5).map((data, idx) => (
            <Tile key={idx} tile={data} isActive={position === idx} />
          ))}
        </section>
        <div className="w-[95px] lg:w-[180px] flex justify-center items-center">
          <div className="h-full w-full border border-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">*****</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row h-[400px] lg:h-[800px]">
        <section className="flex flex-col border w-[70px] lg:w-[180px] h-full rounded-l-lg bg-gray-100 shadow-inner">
          {tiles
            .slice(15, 20)
            .reverse()
            .map((data, idx) => (
              <Tile key={idx} tile={data} isActive={position === 20 - idx} />
            ))}
        </section>

        <div className="bg-red-500 flex-grow flex flex-col items-center justify-center text-white rounded-lg shadow-inner">
          <span className="text-xl font-bold">
            <h1 className="font-semibold text-center mb-[30px]">
              주사위 굴리기!
            </h1>
            <h1 className="my-[10px]">{position}</h1>
            <Dice onRoll={handleRoll} size={200} />
            <div className="flex justify-center mt-[20px]">
              <h2 className="text-black text-[28px] font-bold mr-[5px] border-b">
                {randomNum}
              </h2>
              <h2 className="font-semibold">칸 이동!</h2>
            </div>
          </span>
        </div>

        <section className="flex flex-col border w-[70px] lg:w-[180px] h-full rounded-r-lg bg-gray-100 shadow-inner">
          {tiles.slice(5, 10).map((data, idx) => (
            <Tile key={idx} tile={data} isActive={position === idx + 5} />
          ))}
        </section>
      </div>

      <div className="flex">
        <div className="w-[95px] lg:w-[180px] flex justify-center items-center">
          <div className="h-full w-full border border-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">*****</span>
          </div>
        </div>
        <section className="border flex-grow h-[80px] lg:h-[150px] flex justify-evenly bg-gray-100 rounded-b-lg shadow-inner">
          {tiles
            .slice(10, 15)
            .reverse()
            .map((data, idx) => (
              <Tile key={idx} tile={data} isActive={position === 15 - idx} />
            ))}
        </section>
        <div className="w-[95px] lg:w-[180px] flex justify-center items-center">
          <div className="h-full w-full border border-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">*****</span>
          </div>
        </div>
      </div>
    </main>
  );
}
