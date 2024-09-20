import GameBoard from "./_components/GameBoard";

export default function GamePage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <h1 className="text-[30px] font-bold my-[20px]">상권 블루마블 게임</h1>
      <section className="w-full lg:w-[90%]">
        <GameBoard />
      </section>
    </main>
  );
}
