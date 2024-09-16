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

    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }

    const userData = { name, email, password };

    try {
      const res = await axios.post("/api/register", userData);

      if (res.status === 201) {
        console.log("User registered successfully");
        router.replace("/login");
      } else {
        setError(res.data.message || "Registration failed");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "An unexpected error occurred during registration"
        );
      } else {
        setError("An unexpected error occurred during registration");
      }
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
          onChange={(e) => setName(e.target.value)}
          className="w-[400px] py-2 border rounded-lg pl-[10px] font-bold"
          required
        />
      </div>
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
      <div>
        <input
          placeholder="Confirm Password"
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
