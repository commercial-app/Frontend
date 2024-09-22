import React from "react";
import GameBoard from "./_components/GameBoard";

export default function GamePage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center py-10">
      <div className="bg-neutral-300 bg-opacity-30 p-[10px] rounded-xl text-white text-3xl font-bold mb-5">
        대구 상권 부루마블 게임
      </div>
      <section className="w-full lg:w-[90%] flex flex-col items-center">
        <GameBoard />
      </section>
    </main>
  );
}
