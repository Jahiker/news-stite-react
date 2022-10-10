import React from "react";

import { CardNews } from "../CardNews"
import { CardLoader } from "../CardLoader";

export const CardsGrid = ({ news, loading }) => {

  return (
    <>
      <div className="container">
        <div className="news-grid">
          {loading &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return <CardLoader key={item} />;
            })}

          {!loading &&
            news?.map((item, index) => (
              <CardNews key={`${item.publishedAt}-${index}`} item={item} />
            ))}
        </div>
      </div>
    </>
  );
};
