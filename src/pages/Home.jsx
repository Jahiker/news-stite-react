import React, {useState, useEffect} from 'react'
import { CardsGrid } from '../components/CardsGrid'
import { Paginator } from '../components/Paginator'
import { useGetNews } from '../hooks/useGetNews';
import { useParams } from 'react-router-dom';

export const Home = () => {
  const [query, setQuery] = useState("all");
  const [page, setPage] = useState("1");
  const pageSize = 12;

  const { news, totalNews, loading } = useGetNews(query, page, pageSize);

  const { number } = useParams()

  useEffect(() => {
    setPage(number)
  },[number])


  return (
    <>
      <CardsGrid news={news} loading={loading} />
      <Paginator totalNews={totalNews} pageSize={pageSize} currentPage={number} />
    </>
  )
}
