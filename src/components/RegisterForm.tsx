"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // 비밀번호와 확인 비밀번호가 일치하지 않으면 오류 메시지 표시
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userData = { name, email, password };

    try {
      // 서버에 사용자 데이터를 POST로 전송
      const res = await axios.post(
        "http://43.203.212.158:8080/api/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // 성공적으로 등록된 경우
      if (res.status === 201 || res.status === 200) {
        console.log("User registered successfully");
        // 필드를 초기화하고 로그인 페이지로 이동
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        router.push("/login"); // push 사용
      } else {
        // 실패한 경우 서버의 오류 메시지 표시
        setError(res.data.message || "Registration failed");
      }
    } catch (err: any) {
      // 오류가 발생하면 오류 메시지를 설정
      console.error("Error during registration:", err);
      setError(err.response?.data?.message || "Registration error occurred");
    }
  };

  return (
    <form
      onSubmit={register}
      className="w-full flex flex-col items-center gap-[20px]"
    >
      <div>
        <input
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[400px] py-2 border rounded-lg pl-[10px] font-bold"
          required
        />
      </div>
      <div>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[400px] py-2 border rounded-lg pl-[10px] font-bold"
          type="email"
          required
        />
      </div>
      <div>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[400px] py-2 border rounded-lg pl-[10px] font-bold"
          type="password"
          required
        />
      </div>
      <div>
        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-[400px] py-2 border rounded-lg pl-[10px] font-bold"
          type="password"
          required
        />
      </div>
      {error && <p className="text-red-500 text-[18px]">{error}</p>}
      <button
        type="submit"
        className="w-[400px] py-[8px] bg-red-600 hover:bg-red-700 duration-200 text-white text-[20px] font-bold rounded-3xl mt-[10px]"
      >
        Sign Up
      </button>
    </form>
  );
}
