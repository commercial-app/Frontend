import Link from "next/link";
import LoginNav from "../LoginNav";

export default function Navbar() {
  return (
    <nav className="w-full h-[60px] bg-neutral-200 bg-opacity-70 shadow-md flex justify-between items-center px-4">
      <Link
        href="/"
        className="text-[24px] font-bold text-red-600 hover:bg-red-500 hover:text-white transition-colors duration-300 p-2 rounded-lg"
      >
        경대마블
      </Link>
      <div className="flex gap-6 text-[18px] font-semibold">
        <Link
          href="/about"
          className="hover:bg-neutral-300 rounded-lg p-2 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/game"
          className="hover:bg-neutral-300 rounded-lg p-2 transition duration-300"
        >
          Game
        </Link>
        <LoginNav />
      </div>
    </nav>
  );
}
