import React, { Fragment } from 'react'
import useGifs from '../../hooks/useGifs'
import { Link } from 'react-router-dom'
import './Gifs.css'
function Gifs({ keyword, rating }) {
  const gifs = useGifs(keyword, rating)
  return (
    <Fragment>
      {gifs.map((gif) => (
        <div>
          <Link to={`/gif/${gif.id}`} key={gif.id}>
            <img
              src={gif.images.downsized_medium.url}
              alt='imagen'
              className='gif'
            />
          </Link>
        </div>
      ))}
    </Fragment>
  )
}
export default Gifs
