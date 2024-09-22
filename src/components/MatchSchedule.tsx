"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

// 데이터 타입 정의
interface Match {
  number: string;
  date: string;
  stadium: string;
  away: string;
}

const MatchSchedule: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get<Match[]>(
          "http://43.203.212.158:8080/api/daegu-fc/schedule",
          {
            params: {
              request: "Get match data for DGB Stadium", // 쿼리스트링 추가
            },
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setMatches(response.data);
      } catch (error) {
        setError("경기 일정을 불러오는 중 오류가 발생했습니다.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-600">
        경기 일정을 불러오는 중입니다...
      </p>
    );
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        대구FC 경기 일정
      </h2>
      <ul className="space-y-4">
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition duration-300"
            >
              <div className="font-semibold text-gray-700">
                경기 번호: {match.number}
              </div>
              <div className="text-sm text-gray-600">날짜: {match.date}</div>
              <div className="text-sm text-gray-600">
                경기장: {match.stadium}
              </div>
              <div className="text-sm text-gray-600">상대 팀: {match.away}</div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-600">경기 일정이 없습니다.</p>
        )}
      </ul>
    </div>
  );
};

export default MatchSchedule;
