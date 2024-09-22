import React from "react";
import GameBoard from "./_components/GameBoard";

export default function GamePage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center py-10">
      <h1 className="text-white text-3xl font-bold mb-5">상권 부루마블 게임</h1>
      <section className="w-full lg:w-[90%] flex flex-col items-center">
        <GameBoard />
      </section>
    </main>
  );
}
