import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") || "대구";
  const url = "https://openapi.naver.com/v1/search/news.json";

  const options = {
    headers: {
      "X-Naver-Client-Id": process.env.NAVER_Client_ID,
      "X-Naver-Client-Secret": process.env.NAVER_Client_SECRET,
    },
    params: {
      query,
      display: 10, // 결과 수
      start: 1,    // 시작 인덱스
      sort: 'sim', // 정렬 (sim: 유사도, date: 날짜)
    },
  };

  try {
    const response = await axios.get(url, options);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}