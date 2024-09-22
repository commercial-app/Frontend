import Link from "next/link";
import LoginNav from "../LoginNav";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white w-full h-[60px] bg-opacity-30 shadow-md flex justify-between items-center px-4">
      <div>
        <Link
          href="/"
          className="text-[24px] font-bold text-red-600 hover:bg-red-500 hover:text-white transition-colors duration-300 p-2 rounded-lg flex gap-[10px] items-center"
        >
          <Image
            src="/startKNU.webp"
            width={10}
            height={10}
            alt="start"
            className="w-[40px] h-[40px] rounded-full"
          />
          경대마블
        </Link>
      </div>
      <div className="flex items-center gap-[30px] lg:text-[25px] lg:pr-[30px]">
        <Link
          href="/about"
          className="hover:bg-neutral-300 rounded-lg font-bold p-2 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/Home"
          className="hover:bg-neutral-300 rounded-lg font-bold p-2 transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/game"
          className="hover:bg-neutral-300 rounded-lg font-bold p-2 transition duration-300"
        >
          Game
        </Link>
      </div>
      <div className="flex gap-6 text-[18px] font-semibold">
        <LoginNav />
      </div>
    </nav>
  );
}
