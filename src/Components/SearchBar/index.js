import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router'
import './SearchBar.css'
function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const [rating, setRating] = useState('g')
  const history = useHistory()

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }

  const handleChangeRating = (evt) => {
    setRating(evt.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setKeyword(event.target.value)
    setRating(event.target.value)
    localStorage.setItem('lastKeyword', keyword)
    history.push(`/search/${keyword}/${rating}`)
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Busca gifs...'
          value={keyword}
          onChange={handleChange}
        />
        <select value={rating} onChange={handleChangeRating}>
          <option disabled>Rating:</option>
          <option defaultValue>g</option>
          <option>pg</option>
          <option>pg-13</option>
          <option>r</option>
        </select>
        <button>Search</button>
      </form>
    </Fragment>
  )
}

export default SearchBar
