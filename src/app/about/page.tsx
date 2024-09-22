export default function Page() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 rounded-lg shadow-lg bg-white bg-opacity-30 px-[40px] py-[80px] mt-[30px]">
        <section className="flex flex-col">
          <div className="flex items-center">
            <h1 className="text-[40px] text-red-600 font-semibold">경대마블</h1>
            <h1 className="text-[35px] font-bold">은 어떤 서비스인가요?</h1>
          </div>
          <p className="text-[30px] font-semibold my-[15px] border-x border-y p-[20px]">
            '경대마블'은 대구 지역의 맛집, 관광명소, 문화시설을 탐방하며
            인증샷을 남기고 미션을 수행하면 마일리지를 지급받는 웹 서비스입니다.
            사용자는 이 서비스를 통해 대구의 다양한 상권을 경험하고, 적립한
            마일리지를 대구 지역화폐로 교환하여 지역 내 소비를 촉진할 수
            있습니다.
          </p>
          <h1 className="text-[35px] mt-[50px] font-bold ">
            타서비스와의 차별점?
          </h1>
          <p className="text-[30px] font-semibold my-[15px] border-x border-y p-[20px]">
            맛집, 관광지를 추천만 해주는 타 서비스와는 달리 사용자에게 각 지역별
            상권을 추천해주고 미션을 완수하여 얻을 수 있는 마일리지를 통해 대구
            지역상품권으로 교환하여, 지속가능한 경제를 지향한다는 점에서 차이가
            있습니다.
          </p>
        </section>

        <section className="border-2 pb-[40px]  flex flex-col mt-[80px]">
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
        </section>
        <div className="bg-neutral-300 rounded-lg p-[8px] text-[25px] font-semibold mt-[80px]">
          개선 의견 및 연락: eunwoo1341@gmail.com
        </div>
      </div>
    </main>
  );
}
