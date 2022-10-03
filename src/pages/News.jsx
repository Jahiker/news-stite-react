import React, { useState, useEffect } from "react";

import { CardNews } from "../components/CardNews";

export const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=all&apiKey=70abb1a6c8f645e88f3c7c8f2485e3ce")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if(response.status === "ok") {
          setNews(response.articles)
        }
      })
      .catch((err) => console.error(err));
  }, [news]);
  return (
    <>
      <div className="container">
        <div className="news-grid">
          {news.map((item) => (
            <CardNews item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
