import { useState, useEffect } from "react";

export const useGetNews = (query, page, pageSize, endpoint) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalNews, setTotalNews] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`
      )
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => console.error(err));

      if (data.status === "ok") {
        console.log("DATA", data);
        setNews(data.articles);
        setTotalNews(data.totalResults);
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  return {
    news, totalNews, loading
  }
}