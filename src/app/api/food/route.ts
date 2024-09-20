import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  const URL = 'https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=%EC%88%98%EC%84%B1%EA%B5%AC';

  try {
    const res = await axios.get(URL);
    return NextResponse.json(res.data);
  } catch (err: any) {
    console.error('Error fetching data:', err);
    return NextResponse.error();
  }
}
