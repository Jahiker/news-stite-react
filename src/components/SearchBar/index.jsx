import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { CgSearch } from "react-icons/cg";

import { SearchForm } from './styles';

export const SearchBar = () => {
  const name = useRef('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${name.current.value}`)
  }
  

  return (
    <SearchForm onSubmit={(e) => handleSubmit(e)}>
      <div className="search-wrapper">
        <input type="text" name='search' ref={name} />
        <button type="submit">
          <CgSearch />
        </button>
      </div>
    </SearchForm>
  )
}
