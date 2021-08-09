import React from 'react'
import { useParams } from 'react-router-dom'
import Gifs from '../../Components/Gifs'
import SearchBar from '../../Components/SearchBar'
function SearchResults() {
  const params = useParams()
  return (
    <div>
      <SearchBar />
      <Gifs keyword={params.keyword} rating={params.rating} />
    </div>
  )
}

export default SearchResults
