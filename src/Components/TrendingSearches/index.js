import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import trendingGifs from '../../services/trendingGifs'
import './TrendingSearches.css'
function TrendingSearches() {
  const [trends, setTrends] = useState([])
  useEffect(function () {
    trendingGifs().then(setTrends)
  }, [])
  return (
    <>
      <ul className='results'>
        <h2 style={{ marginBottom: '25px' }}>Trending Searches</h2>
        {trends.map((searches) => (
          <li key={searches}>
            <Link
              onClick={() => {
                localStorage.setItem('lastKeyword', searches)
              }}
              to={`/search/${encodeURIComponent(searches)}`}
            >
              {searches}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TrendingSearches
