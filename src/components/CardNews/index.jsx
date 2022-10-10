import React from "react";

import { CardStyled } from "./styles";

export const CardNews = ({ item }) => {
  return (
    <CardStyled>
      <figure className="img">
        <img src={item.urlToImage} alt={item.title} loading="lazy"/>
      </figure>
      <div className="data-news">
        <h5>{item.title}</h5>
        <a
          className="btn"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          More...
        </a>
      </div>
    </CardStyled>
  );
};
