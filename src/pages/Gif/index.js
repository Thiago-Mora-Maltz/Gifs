import React, { Fragment } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import GifsContext from '../../context/GifsContext'
import Title from '../../Components/Title'
import SearchBar from '../../Components/SearchBar'

function SingleGif() {
  const { id } = useParams()
  const { gifs } = useContext(GifsContext)
  const gif = gifs.find((gif) => gif.id === id)
  return (
    <Fragment>
      <div className='container'>
        <Title />
        <SearchBar />
        <img
          src={gif.images.downsized_medium.url}
          alt='imagen'
          style={{ width: '800px', height: '60vh' }}
        ></img>
      </div>
    </Fragment>
  )
}

export default SingleGif
