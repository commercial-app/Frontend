"use client";

import { useAuthStore } from "@/app/store/useAuthStore";
import { useMissionStore } from "@/app/store/useMissionStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SubmitPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(""); // 이미지 URL 상태
  const [review, setReview] = useState<string>("");
  const { token } = useAuthStore();
  const { missionId, Position, order } = useMissionStore();

  const navigate = useRouter();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url); // 미리보기 URL 생성
      console.log("테스트 파일!!", file);
    }
  };

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!imageUrl) {
      alert("이미지를 업로드하세요.");
      return;
    }

    // JSON 형태로 데이터 전송
    const data = {
      image_url: imageUrl, // 이미지 URL
      content: review, // 리뷰 내용
    };

    try {
      const res = await axios.post(
        `http://43.203.212.158:8080/api/board/${missionId}`,
        data, // JSON 데이터
        {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer 토큰 추가
            "Content-Type": "application/json", // JSON 형식 명시
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        console.log("데이터가 성공적으로 전송되었습니다.");
      } else {
        console.error("데이터 전송 실패:", res.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }

    setImageFile(null);
    setImageUrl("");
    setReview("");
  };

  if (Position !== order) {
    alert("아직 깰 수 없는 미션입니다");
    navigate.back();
    return;
  }

  return (
    <main className="w-full min-h-screen flex flex-col items-center py-10">
      <h1 className="bg-blue-400 w-full max-w-2xl rounded-xl py-[6px] text-center text-[35px] text-white font-semibold mb-[60px] my-[40px]">
        Mission 제출
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl"
      >
        <div className="flex flex-col mb-8">
          <h2 className="text-[22px] font-bold mb-2">이미지 업로드</h2>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-lg p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:bg-blue-500 file:text-white cursor-pointer hover:file:bg-blue-600"
          />
          {imageFile && (
            <img
              src={imageUrl}
              alt="미리보기"
              className="mt-4 w-full h-auto rounded-lg"
              onLoad={() => URL.revokeObjectURL(imageUrl)} // URL 해제
            />
          )}
        </div>
        <div>
          <h2 className="text-[22px] font-bold mb-2">Review</h2>
          <textarea
            name="review"
            value={review}
            onChange={handleReviewChange}
            className="border-2 border-gray-400 w-full h-[400px] rounded-lg p-2 resize-none focus:outline-none focus:border-blue-500"
            placeholder="여기에 리뷰를 입력하세요..."
          />
        </div>
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-200"
        >
          제출
        </button>
      </form>
    </main>
  );
}
