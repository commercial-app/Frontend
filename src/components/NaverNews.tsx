"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);

  const getNews = async () => {
    try {
      const res = await axios.get<{ items: NewsItem[] }>("/api/news", {
        params: {
          query: "재활용",
          display: 5,
          start: 1,
          sort: "sim",
        },
      });
      setNews(res.data.items);
    } catch (error) {
      console.error("news 데이터 실패 : ", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-green-200 bg-opacity-20 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {news.map((item) => (
              <li
                key={item.link}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-110 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  <h2
                    className="text-xl font-semibold text-gray-800 mb-2"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    className="text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    자세히 보기
                  </a>
                  <span className="text-sm text-gray-500 m-4">
                    {item.pubDate.split(" ").slice(1, 4).join(" ")}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
