import { create } from "zustand";
import { persist } from "zustand/middleware";

interface missionProps {
  Position: number;
  order: number;
  missionId: number;
  title: string;
  content: string;
  imageUrl: string;
  categoryName: string;
  missionSummitState: boolean;
  rejection: boolean;

  SetPosition: (Position: number) => void;
  setOrder: (order: number) => void;
  setId: (missionId: number) => void;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setImage: (imageUrl: string) => void;
  setCategoryName: (categoryName: string) => void;
  setMissionSummitState: (missionSummitState: boolean) => void;
  setRejection: (rejection: boolean) => void;
}

export const useMissionStore = create<missionProps>()(
  persist(
    (set) => ({
      Position: 0,
      order: 0,
      missionId: 0,
      title: "",
      content: "",
      imageUrl: "",
      categoryName: "",
      missionSummitState: false,
      rejection: false,
      SetPosition: (Position: number) => set({ Position }),
      setOrder: (order: number) => set({ order }),
      setId: (missionId: number) => set({ missionId }),
      setTitle: (title: string) => set({ title }),
      setContent: (content: string) => set({ content }),
      setImage: (imageUrl: string) => set({ imageUrl }),
      setCategoryName: (categoryName: string) => set({ categoryName }),
      setMissionSummitState: (state: boolean) =>
        set({ missionSummitState: state }),
      setRejection: (state: boolean) => set({ rejection: state }),
    }),
    {
      name: "mission-store", // Local storage key
    }
  )
);
