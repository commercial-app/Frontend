"use client";

import { useMissionStore } from "@/app/store/useMissionStore";
import axios from "axios";
import { useState } from "react";

export default function SubmitPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [review, setReview] = useState<string>("");

  const { id } = useMissionStore();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
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

    if (!imageFile) {
      alert("이미지를 업로드하세요.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile); // 이미지 파일 추가
    formData.append("review", review); // 리뷰 추가

    try {
      const res = await axios.post(`/api/submit/${id}`, formData);

      if (res.status === 200 || res.status === 201) {
        console.log("파일이 성공적으로 업로드되었습니다.");
      } else {
        console.error("파일 업로드 실패:", res.statusText);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }

    setImageFile(null);
    setReview("");
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-[35px] font-bold mb-10">Mission 제출</h1>
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
              src={URL.createObjectURL(imageFile)}
              alt="미리보기"
              className="mt-4 w-full h-auto rounded-lg"
              onLoad={() => URL.revokeObjectURL(URL.createObjectURL(imageFile))} // URL 해제
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
