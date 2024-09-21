"use client";

import { useAuthStore } from "@/app/store/useAuthStore";
import Link from "next/link";

export default function LoginNav() {
  const { token, name, point, resetUser, clearToken } = useAuthStore();

  const handleLogout = () => {
    clearToken();
    resetUser();
  };

  return (
    <div className="flex items-center gap-4">
      {token ? (
        <>
          <div className="bg-white rounded-lg px-[5px]">
            <span className="text-lg ">{name}님 </span>
            <span className="text-lg  ">{point} points</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white hover:bg-red-600 transition duration-300 p-2 rounded-lg"
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          href="/login"
          className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 rounded-lg p-2"
        >
          Login
        </Link>
      )}
    </div>
  );
}
