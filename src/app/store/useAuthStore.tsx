import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProps {
  name: string;
  email: string;
  token: string | null;
  point: number;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setToken: (token: string | null) => void;
  clearToken: () => void;
  resetUser: () => void; // 매개변수 없이 상태를 초기화합니다.
}

export const useAuthStore = create<UserProps>()(
  persist(
    (set) => ({
      name: "",
      email: "",
      point: 0,
      token: null,
      setName: (name: string) => set({ name }),
      setEmail: (email: string) => set({ email }),
      setPoint: (point: number) => set({ point }),
      setToken: (token: string | null) => set({ token }),
      clearToken: () => set({ token: null }),
      resetUser: () => set({ name: "", email: "", point: 0 }), // 상태를 초기화합니다.
    }),
    {
      name: "auth-store", // Local storage key
    }
  )
);
