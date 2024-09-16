import { create } from "zustand";

interface UserProps {
  name: string;
  email: string;
  token: string | null;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  clearToken: () => void;
  resetUser: () => void;
}

export const useAuthStore = create<UserProps>((set) => ({
  name: "",
  email: "",
  token: null,
  setName: (name: string) => set(() => ({ name })),
  setEmail: (email: string) => set(() => ({ email })),
  setToken: (token: string) => set(() => ({ token })),
  clearToken: () => set({ token: null }),
  resetUser: () => set(() => ({ name: "", email: "" })),
}));
