import React, { useState } from "react";

import { CardsGrid } from "../components/CardsGrid";

export const News = () => {
  const [query, setQuery] = useState("all");
  const [page, setPage] = useState("1");

  return (
    <CardsGrid query={query} page={page} />
  )
};
