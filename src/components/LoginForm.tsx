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

  const {
    setName,
    setPoint,
    setToken,
    setEmail: setEmailStore,
  } = useAuthStore();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const userData = { email, password };

    try {
      const loginRes = await axios.post(
        "http://43.203.212.158:8080/api/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (loginRes.status === 200) {
        const { token } = loginRes.data;
        setToken(token);
        sessionStorage.setItem("token", token);

        // 사용자 정보 요청
        try {
          const userInfoRes = await axios.get(
            "http://43.203.212.158:8080/api/member",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (userInfoRes.status === 200) {
            const { email, name, point } = userInfoRes.data;
            setEmailStore(email);
            setName(name);
            setPoint(point);
            router.replace("/");
          } else {
            setError("Failed to fetch user information");
          }
        } catch (userInfoErr) {
          console.error("User info fetch error:", userInfoErr);
          setError("Failed to fetch user information");
        }
      } else {
        setError(loginRes.data.message || "Login failed");
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
