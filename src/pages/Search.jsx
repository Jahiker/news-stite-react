import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGetNews } from '../hooks/useGetNews'

import { CardsGrid } from '../components/CardsGrid'
import { Paginator } from '../components/Paginator'
import { SearchCounter } from '../components/SearchCounter'

export const Search = () => {
  const { q } = useParams()
  const pageSize = 16;
  
  // const [searchNews, setSearchNews] = useState([])
  // const [searchLoading, setSearchLoading] = useState(true);
  // const [searchTotal, setSearchTotal] = useState(0);

  const { news, totalNews, loading } = useGetNews(q, 1, pageSize);
  
  useEffect(() => {
    // setSearchNews(news)
    // setSearchLoading(loading)
    // setSearchTotal(totalNews)
  },[q])
  
  return (
    <>
      <SearchCounter search={q} totalNews={totalNews} />
      <CardsGrid news={news} loading={loading} />
      <Paginator totalNews={totalNews} pageSize={pageSize} currentPage={1} />
    </>
  )
}
