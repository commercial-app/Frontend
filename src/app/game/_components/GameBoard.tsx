import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

const URL = "http://localhost:3004/boards";

const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];

export default function GameBoard() {
  useEffect(() => {
    try {
      axios.get(URL);
    } catch (err) {
      console.err("GET for Board Info - failed", err);
    }
  }, []);

  return (
    <main className="border w-full flex flex-col my-[20px]">
      <div className="flex">
        <div className="bg-red-600 w-[80px] lg:w-[150px] h-[80px] lg:h-[150px] flex flex-col justify-center items-center">
          <Image
            src="/gameBoard/startKNU.jpg"
            width={60}
            height={60}
            alt="start"
            className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full"
          />
          <h1 className="text-[18px] font-semibold text-white">Start</h1>
        </div>
        <section className="border flex-grow h-[80px] lg:h-[150px]">1</section>
        <div className="w-[80px] lg:w-[150px]">*****</div>
      </div>
      <div className="flex">
        <section className="flex flex-col border w-[80px] lg:w-[150px] h-[400px] lg:h-[800px]">
          2
        </section>
        <div className="flex-grow h-[400px] lg:h-[800px]">center</div>
        <section className="flex flex-col border w-[80px] lg:w-[150px] h-[400px] lg:h-[800px]">
          3
        </section>
      </div>
      <div className="flex">
        <div className="w-[80px] lg:w-[150px]">*****</div>
        <section className="border flex-grow h-[80px] lg:h-[140px]">4</section>
        <div className="w-[80px] lg:w-[150px]">*****</div>
      </div>
    </main>
  );
}
