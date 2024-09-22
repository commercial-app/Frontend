"use client";

import { useMissionStore } from "@/app/store/useMissionStore";
import Image from "next/image";
import Link from "next/link";

export default function MissionDetailPage() {
  const { missionId, title, content, imageUrl, categoryName } =
    useMissionStore();

  console.log("테스트:", missionId, title, content, imageUrl, categoryName);

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b py-[50px]">
      <div className="bg-white shadow-lg flex flex-col items-center w-[90%] max-w-[900px] p-[40px] rounded-lg">
        {/* Title Section */}
        <div className="flex flex-col items-center mb-[20px] text-center">
          <h1 className="font-extrabold text-[36px] text-gray-800 mb-[10px]">
            {title}
          </h1>
          <div className="flex gap-[8px] items-center text-gray-600">
            <span className="bg-blue-100 text-blue-600 px-[12px] py-[5px] rounded-full font-semibold text-[18px]">
              {categoryName}
            </span>
          </div>
        </div>

        {imageUrl && (
          <div className="relative w-full h-[400px] mb-[30px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={`https://cdn.st-news.co.kr/news/photo/202201/4027_10676_2416.jpg`}
              alt="Mission image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}

        <div className="text-[20px] leading-relaxed font-medium text-gray-700 text-center px-[10px]">
          {content}
        </div>

        <div></div>

        <div className="mt-[40px] w-full flex justify-between">
          <Link
            href={`/game/${missionId}/submit`} // 수정된 필드에 맞춤
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-[12px] px-[30px] rounded-full shadow-lg transition-all duration-200"
          >
            제출
          </Link>
          <Link
            href="/game"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-[12px] px-[30px] rounded-full shadow-lg transition-all duration-200"
          >
            다음 미션으로 이동
          </Link>
        </div>
      </div>
    </main>
  );
}
