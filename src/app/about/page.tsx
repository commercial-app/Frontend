export default function Page() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 rounded-lg shadow-lg bg-white bg-opacity-30 px-[40px] py-[80px]">
        <h1 className="bg-red-500 p-4 rounded-lg text-white font-bold text-[28px] shadow-md mb-[30px]">
          경북대학교 컴퓨터학부 글로벌소프트웨어융합전공
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <h2 className="font-bold text-[22px] text-gray-800">
            Frontend: 성은우
          </h2>
          <h2 className="font-bold text-[22px] text-gray-800">
            Backend: 안재민
          </h2>
          <h2 className="font-bold text-[22px] text-gray-800">
            Backend: 정해찬
          </h2>
          <h2 className="font-bold text-[22px] text-gray-800">
            Backend: 한승연
          </h2>
        </div>
      </div>
    </main>
  );
}
