import { useMissionStore } from "@/app/store/useMissionStore";
import Link from "next/link";
import { useEffect } from "react";
import { FaUserAstronaut } from "react-icons/fa";

interface TileProps {
  tile: {
    tile_id: number;
    order: number;
    state: boolean;
    mission: {
      mission_id: number;
      title: string;
      content: string;
      image_url: string;
      category_name: string;
    };
  };
  isActive: boolean; // 추가
}

export default function Tile({ tile, isActive }: TileProps) {
  const { setId, setTitle, setContent, setImage, setCategory } =
    useMissionStore();

  useEffect(() => {
    setId(tile.mission.mission_id);
    setTitle(tile.mission.title);
    setContent(tile.mission.content);
    setImage(tile.mission.image_url);
    setCategory(tile.mission.category_name);
  }, [tile, setTitle, setContent, setImage, setCategory]);

  return (
    <Link
      href={`/game/${tile.mission.mission_id}`}
      className="border flex-1 flex flex-col justify-center items-center hover:bg-neutral-300 duration-200 relative"
    >
      {isActive && (
        <div className="flex">
          <FaUserAstronaut
            size={25}
            color="blue"
            className="text-xl mb-[10px] "
          />
          <h1 className="font-bold text-blue-800 ml-[8px]">ME</h1>
        </div>
      )}
      <h1 className="font-bold">{tile.mission.title}</h1>
    </Link>
  );
}
