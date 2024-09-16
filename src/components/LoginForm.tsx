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
  const setNameStore = useAuthStore((state) => state.setName);
  const setEmailStore = useAuthStore((state) => state.setEmail);

  const Login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const userData = { email, password };

    try {
      const res = await axios.post("/api/login", userData);
      if (res.status === 200) {
        const { user, token } = res.data;

        setToken(token);
        setNameStore(user.name);
        setEmailStore(user.email);
        sessionStorage.setItem("token", token);
        router.replace("/");
      } else {
        setError(res.data.message || "LoginIn failed");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "An unexpected error occurred during Login"
      );
    }
  };

  return (
    <form
      onSubmit={Login}
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
