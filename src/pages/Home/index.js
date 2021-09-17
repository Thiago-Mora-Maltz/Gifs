import React, { Fragment } from 'react'
import Gifs from '../../Components/Gifs'
import SearchBar from '../../Components/SearchBar'
import Title from '../../Components/Title'
import TrendingSearches from '../../Components/TrendingSearches'
import './Home.css'
function Home() {
  return (
    <Fragment>
      <div className='container'>
        <Title />
        <h2 style={{ marginBottom: '15px' }}>Search for gifs here!</h2>
        <SearchBar />
        <div className='div-home'>
          <div className='gifs'>
            <Gifs />
          </div>
          <div className='trending'>
            <TrendingSearches />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
