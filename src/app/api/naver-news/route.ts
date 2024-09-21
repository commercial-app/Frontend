import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const url = "https://openapi.naver.com/v1/search/news.json?query=대구";
  const query = new URL(request.url).searchParams.get("query") || "대구"; // 쿼리 파라미터

  const options = {
    headers: {
      "X-Naver-Client-Id": process.env.NAVER_Client_ID,
      "X-Naver-Client-Secret": process.env.NAVER_Client_SECRET,
    },
    params: {
      query,
    },
  };

  try {
    const response = await axios.get(url, options);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
