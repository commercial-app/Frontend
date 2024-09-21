import NaverNews from "@/components/NaverNews";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center p-6">
      <section className="bg-blue-700 bg-opacity-80 p-[30px] rounded-xl flex flex-col items-center text-center mb-[80px] mt-[90px]">
        <h1 className=" p-4 text-3xl font-bold text-white mb-4 rounded-lg">
          대구 상권 부루마블 게임하러 가기!
        </h1>
        <Link href="/game">
          <span className="text-[40px] bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-200">
            START
          </span>
        </Link>
      </section>
      <section className="bg-neutral-700 bg-opacity-80 rounded-xl w-full max-w-3xl flex flex-col items-center">
        <h1 className="mt-[30px] text-white text-3xl font-bold mb-6">
          대구 상권 뉴스
        </h1>
        <NaverNews />
      </section>
    </main>
  );
}
