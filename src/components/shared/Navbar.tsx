import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-[60px] bg-neutral-200 bg-opacity-60 flex justify-between items-center px-[20px]">
      <div>KNU 팀</div>
      <div className="flex gap-[20px] text-[20px] font-semibold">
        <Link href="/about" className="hover:bg-neutral-300 rounded-lg p-1">
          About
        </Link>
        <Link href="/game" className="hover:bg-neutral-300 rounded-lg p-1">
          Game
        </Link>
      </div>
    </nav>
  );
}
