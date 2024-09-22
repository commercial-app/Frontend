import MatchSchedule from "@/components/MatchSchedule";
import NaverNews from "@/components/NaverNews";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center p-6">
      <section className="w-[800px] bg-blue-700 bg-opacity-80 p-[40px] rounded-xl flex flex-col items-center text-center mb-[80px] mt-[90px] hover:scale-110">
        <h1 className=" p-4 text-3xl font-bold text-white mb-4 rounded-lg">
          대구 상권 부루마블 게임하러 가기!
        </h1>
        <Link href="/game">
          <span className="font-semibold text-[40px] bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-200">
            START
          </span>
        </Link>
      </section>
      <section className="w-full bg-neutral-700 bg-opacity-80 rounded-xl max-w-3xl flex gap-[40px] items-center">
        {/* <div className="w-full">
          <h1 className="mt-[30px] text-white text-3xl font-bold mb-6">
            대구FC 경기 일정 요청
          </h1>
          <MatchSchedule />
        </div>*/}
        <div className="flex flex-col items-center">
          <h1 className="mt-[30px] text-white text-3xl font-bold mb-6 text-center">
            대구 상권 뉴스
          </h1>
          <NaverNews />
        </div>
      </section>
    </main>
  );
}
