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
