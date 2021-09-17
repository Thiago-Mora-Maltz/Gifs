import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Gifs from '../../Components/Gifs'
import SearchBar from '../../Components/SearchBar'
import TrendingSearches from '../../Components/TrendingSearches'
import Title from '../../Components/Title'
import useGifs from '../../hooks/useGifs'

function SearchResults() {
  const params = useParams()
  const { setPage } = useGifs()
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <Fragment>
      <div className='container'>
        <Title />
        <SearchBar />
        <h2 style={{ marginBottom: '20px' }}> Results for: {params.keyword}</h2>
        <div className='div-home'>
          <div className='gifs'>
            <Gifs keyword={params.keyword} rating={params.rating} />
            <button onClick={handleNextPage}>Load More</button>
          </div>
          <div className='trending'>
            <TrendingSearches />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SearchResults
