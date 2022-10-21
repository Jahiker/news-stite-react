import React, { useState } from "react";
import { PaginationElement } from "./styles";
import { useNavigate } from "react-router-dom";

export const Paginator = ({ totalNews, pageSize, currentPage = 1 }) => {
  let pages = totalNews / pageSize;

  const navigate = useNavigate();

  const changePage = (event) => {
    
    const change = parseInt(event.target.dataset.pageChange)
    const currentPageIndex = parseInt(currentPage)

    if (currentPage <= 1 && change < 0) return;
    
    const pageIndex = currentPageIndex + change

    navigate(`/${pageIndex}`)

  }

  return (
    <PaginationElement>
      <button onClick={() => changePage(event)} data-page-change="-1">prev</button>
      <span>{ currentPage }</span>
      <button onClick={() => changePage(event)} data-page-change="1">next</button>
    </PaginationElement>
  );
};
