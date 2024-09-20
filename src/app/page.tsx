import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      메인페이지
      <Image width={30} height={30} src="/test.jpg" alt="test" />
    </main>
  );
}
