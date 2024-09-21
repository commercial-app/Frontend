"use client";

import { useAuthStore } from "@/app/store/useAuthStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const setToken = useAuthStore((state) => state.setToken);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // 오류 상태 초기화

    const userData = { email, password };

    try {
      const res = await axios.post(
        "http://43.203.212.158:8080/api/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        const { token } = res.data;

        setToken(token);

        // sessionStorage에 토큰 저장
        try {
          sessionStorage.setItem("token", token);
        } catch (storageError) {
          console.error("Failed to save token to sessionStorage", storageError);
          setError("Failed to save session. Please try again.");
          return;
        }

        router.replace("/"); // 로그인 성공 후 홈으로 리다이렉션
      } else {
        setError(res.data.message || "Login failed");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "An error occurred during login");
    }
  };

  return (
    <form
      onSubmit={login}
      className="w-full flex flex-col items-center gap-[20px]"
    >
      <div>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-[400px] py-2 border rounded-lg pl-[10px] font-bold"
          type="email"
          required
        />
      </div>
      <div>
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-[400px] py-2 border rounded-lg pl-[10px] font-bold"
          type="password"
          required
        />
      </div>

      {/* 에러 메시지 표시 */}
      {error && <p className="text-red-500 text-[18px]">{error}</p>}

      <button
        type="submit"
        className="w-[400px] py-[8px] bg-red-600 hover:bg-red-700 duration-200 text-white text-[20px] font-bold rounded-3xl mt-[10px]"
      >
        Sign In
      </button>
    </form>
  );
}
