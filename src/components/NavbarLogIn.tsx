"use client";

import { useAuthStore } from "@/app/store/useAuthStore";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NavbarLogIn() {
  const token = useAuthStore((state) => state.token);
  const name = useAuthStore((state) => state.name);
  const setName = useAuthStore((state) => state.setName);
  const clearToken = useAuthStore((state) => state.clearToken);
  const resetUser = useAuthStore((state) => state.resetUser);
  const router = useRouter();

  const handleLogout = () => {
    // 상태 초기화
    clearToken();
    resetUser();

    // 토큰 삭제
    sessionStorage.removeItem("token");
    localStorage.removeItem("token"); // 로컬 스토리지에서도 삭제

    // 리디렉션
    router.push("/login");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 받은 사용자 정보를 상태에 저장
        setName(res.data.user.name);
      } catch (err: any) {
        console.error(
          "Error fetching profile:",
          err.response?.data || err.message
        );
      }
    };

    if (token) {
      fetchProfile(); // token이 있을 때만 프로필 요청
    }
  }, [token, setName]);

  return (
    <nav className="flex">
      {token ? (
        <div className="flex gap-[20px] items-center font-semibold">
          <p className="text-blue-600">{name} 님</p>
          <button
            onClick={handleLogout}
            className="font-bold text-[18px] hover:bg-neutral-300 p-1 rounded-lg"
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <Link href="/login">LOGIN</Link>
      )}
    </nav>
  );
}
