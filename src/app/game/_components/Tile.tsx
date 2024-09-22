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
      missionId: number;
      title: string;
      content: string;
      imageUrl: string;
      categoryName: string;
      missionSummitState: boolean;
      rejection: boolean;
    };
  };
  isActive: boolean;
}

export default function Tile({ tile, isActive }: TileProps) {
  const {
    setOrder,
    setId,
    setTitle,
    setContent,
    setImage,
    setCategoryName,
    setMissionSummitState,
    setRejection,
  } = useMissionStore();

  const onhandleChange = () => {
    console.log("타일 업데이트", tile);
    setOrder(tile.order);
    setId(tile.mission.missionId);
    setTitle(tile.mission.title);
    setContent(tile.mission.content);
    setImage(tile.mission.imageUrl);
    setCategoryName(tile.mission.categoryName);
    setMissionSummitState(tile.mission.missionSummitState);
    setRejection(tile.mission.rejection);
  };

  return (
    <Link
      onClick={onhandleChange}
      href={`/game/${tile.mission.missionId}`}
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
