import { create } from "zustand";
import { persist } from "zustand/middleware";

interface missionProps {
  id: number;
  title: string;
  content: string;
  image: string;
  category: string;
  setId: (id: number) => void;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setImage: (image: string) => void;
  setCategory: (category: string) => void;
}

export const useMissionStore = create<missionProps>()(
  persist(
    (set) => ({
      id: 0,
      title: "",
      content: "",
      image: "",
      category: "",
      setId: (id: number) => set({ id }),
      setTitle: (title: string) => set({ title }),
      setContent: (content: string) => set({ content }),
      setImage: (image: string) => set({ image }),
      setCategory: (category: string) => set({ category }),
    }),
    {
      name: "mission-store", // Local storage key
    }
  )
);
