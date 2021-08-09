import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import trendingGifs from '../../services/trendingGifs'
import './TrendingSearches.css'
function TrendingSearches() {
  const [trends, setTrends] = useState([])
  useEffect(function () {
    trendingGifs().then(setTrends)
  }, [])
  return (
    <Fragment>
      <ul className='results'>
        <h2 style={{ marginBottom: '25px' }}>Trending Searches</h2>
        {trends.map((searches) => (
          <li key={searches}>
            <Link to={`/search/${encodeURIComponent(searches)}`}>
              {searches}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default TrendingSearches
