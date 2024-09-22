"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import Dice from "@/components/dice";
import { useAuthStore } from "@/app/store/useAuthStore";
import { FaDice } from "react-icons/fa";

const BOARD_URL = "http://43.203.212.158:8080/api/board";
const MOVE_URL = (board_id: number) =>
  `http://43.203.212.158:8080/api/board/${board_id}/move`;

interface TileProps {
  tile_id: number;
  order: number;
  state: boolean;
  mission: {
    missionId: number;
    title: string;
    content: string;
    imageUrl: string;
    categoryName: string;
    missionSummitState: boolean;
    rejection: boolean;
  };
}

export default function GameBoard() {
  const [position, setPosition] = useState(0);
  const [tiles, setTiles] = useState<TileProps[]>([]);
  const [randomNum, setRandomNum] = useState(0); // 주사위 값
  const [loading, setLoading] = useState(false); // 로딩 상태
  const { token } = useAuthStore();
  const [boardId, setBoardId] = useState(0);

  // 보드 데이터를 가져오는 함수
  const fetchBoard = async () => {
    setLoading(true); // 로딩 시작
    try {
      const res = await axios.get(BOARD_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Board data fetched", res);
      setBoardId(res.data.boardId);
      setPosition(res.data.memberPosition);
      setTiles(res.data.tiles);
    } catch (err) {
      console.error("GET for Board Info - failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchBoard();
    }
  }, [token]);

  const handleRoll = async (value: number) => {
    setRandomNum(value); // 주사위 값 업데이트
    console.log("주사위 값:", value);
    console.log("현재 위치:", position);
    console.log("is_cycle 값:", position >= 20);

    try {
      // 쿼리 스트링으로 값을 전달하는 방식으로 변경
      const res = await axios.post(
        MOVE_URL(boardId) + `?dice=${value}&isCycle=${position >= 20}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Move API Response", res);

      // 새로운 보드 데이터로 위치와 타일을 업데이트
      setPosition(res.data.memberPosition);
      setTiles(res.data.tiles);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(
          "POST to Move API - failed",
          err.response?.status,
          err.response?.data
        ); // 상태 코드와 오류 메시지 출력
      } else {
        console.error("Unknown error", err);
      }
    }
  };

  return (
    <main className="border rounded-lg shadow-lg lg:w-[1400px] flex flex-col my-[20px]">
      {loading ? ( // 로딩 상태 표시
        <div className="flex justify-center items-center h-full">
          <h2 className="text-lg">로딩 중...</h2>
        </div>
      ) : (
        <>
          {/* 윗쪽 주사위 게임 보드 UI */}
          <div className="flex">
            <div className="bg-red-600 w-[95px] lg:w-[180px] h-[80px] lg:h-[150px] flex flex-col justify-center items-center rounded-l-lg">
              <Image
                src="/startKNU.webp"
                width={60}
                height={60}
                alt="start"
                className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full"
              />
              <h1 className="text-[18px] font-semibold text-white">Start</h1>
            </div>
            <section className="border flex-grow h-[80px] lg:h-[150px] flex justify-evenly bg-gray-100 rounded-r-lg shadow-inner">
              {tiles.slice(0, 5).map((data) => (
                <Tile
                  key={`${data.tile_id}-${data.order}`} // 고유한 key 값
                  tile={data}
                  isActive={position === data.order}
                />
              ))}
            </section>
            <div className="w-[95px] lg:w-[180px] flex justify-center items-center">
              <div className="h-full w-full border border-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">*****</span>
              </div>
            </div>
          </div>

          {/* 가운데 주사위 굴리기 및 게임 로직 */}
          <div className="flex flex-row h-[400px] lg:h-[800px]">
            <section className="flex flex-col border w-[70px] lg:w-[180px] h-full rounded-l-lg bg-gray-100 shadow-inner">
              {tiles
                .slice(15, 20)
                .reverse()
                .map((data) => (
                  <Tile
                    key={`${data.tile_id}-${data.order}`} // 고유한 key 값
                    tile={data}
                    isActive={position === data.order}
                  />
                ))}
            </section>

            <div className="bg-red-500 flex-grow flex flex-col items-center justify-center text-white rounded-lg shadow-inner">
              <span className="text-xl font-bold">
                <p className="flex gap-[10px] mb-[30px] items-center">
                  <h1 className="font-semibold ">
                    주사위 굴려서 대구상권 탐험을 해봐요!
                  </h1>
                  <FaDice size={26} color="blue" />
                </p>
                <Dice onRoll={handleRoll} />
                <div className="flex justify-center mt-[20px]">
                  <h2 className="text-black text-[28px] font-bold mr-[5px] border-b">
                    {randomNum}
                  </h2>
                  <h2 className="font-semibold">칸 이동!</h2>
                </div>
              </span>
            </div>

            <section className="flex flex-col border w-[70px] lg:w-[180px] h-full rounded-r-lg bg-gray-100 shadow-inner">
              {tiles.slice(5, 10).map((data) => (
                <Tile
                  key={`${data.tile_id}-${data.order}`} // 고유한 key 값
                  tile={data}
                  isActive={position === data.order}
                />
              ))}
            </section>
          </div>

          {/* 아래쪽 주사위 게임 보드 UI */}
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
                .map((data) => (
                  <Tile
                    key={`${data.tile_id}-${data.order}`} // 고유한 key 값
                    tile={data}
                    isActive={position === data.order}
                  />
                ))}
            </section>
            <div className="w-[95px] lg:w-[180px] flex justify-center items-center">
              <div className="h-full w-full border border-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">*****</span>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
