"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface NewsItem {
  title: string;
  link: string;
  description: string;
}

interface NaverNewsResponse {
  items: NewsItem[];
}

const NaverNews: React.FC = () => {
  const [data, setData] = useState<NewsItem[]>([]);

  const getSearchData = async () => {
    const response = await axios.get<NaverNewsResponse>("/api/naver-news", {
      params: {
        query: "대구",
      },
    });
    setData(response.data.items);
  };

  useEffect(() => {
    getSearchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid grid-cols-1 gap-4 w-full max-w-4xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:bg-neutral-200 transition-all duration-200 hover:scale-110"
          >
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h2>
            <p className="text-gray-700 mt-2">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
            >
              더 보기
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NaverNews;
