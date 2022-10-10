import React, { useState } from "react";

export const Paginator = ({ totalNews, pageSize, setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let pages = totalNews / pageSize;
  console.log("PAGES: ", pages);

  const prevPage = () => {
    if (currentPage <= 1) return;
    const pageIndex = currentPage - 1
    setCurrentPage(pageIndex);
    setPage(pageIndex)
  }

  const nextPage = () => {
    if ( currentPage >= pages ) return;
    const pageIndex = currentPage + 1
    setCurrentPage(pageIndex);
    setPage(pageIndex);
  }

  return (
    <div>
      <button onClick={prevPage}>prev</button>
      <span>{ currentPage }</span>
      <button onClick={nextPage}>next</button>
    </div>
  );
};
