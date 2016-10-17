import React from 'react'

export const SearchForm = ({ state, onSubmit }) => (
  <form onSubmit={e => onSubmit(e)}>
      <input type="search" className='js-search-input'></input>
      <button name="submit" className='js-submit-search'></button>
  </form>
)
