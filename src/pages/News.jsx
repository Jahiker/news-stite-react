import React, { useState, useEffect } from "react";

import { CardNews } from "../components/CardNews";
import { CardLoader } from "../components/CardLoader";

export const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await fetch(`https://newsapi.org/v2/everything?q=all&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));
      
      if(data.status === 'ok') {
        setNews(data.articles)
        setLoading(false)
      }

    }

    fetchNews();
    
  }, []);

  return (
    <>
      <div className="container">
        <div className="news-grid">
          {loading && [1,2,3,4,5,6,7,8,9,10].map((item) => {
              return (<CardLoader key={item} />)
          })}

          {!loading && news?.map((item, index) => (
            <CardNews key={`${item.publishedAt}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
