import React from 'react'
import { Counter } from './style'

export const SearchCounter = (props) => {
  return (
    <Counter>
        <h3>{ props.totalNews } Results for "{ props.search }"</h3>
    </Counter>
  )
}
