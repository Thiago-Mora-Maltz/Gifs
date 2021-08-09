import { useEffect, useContext } from 'react'
import fetchGifs from '../services/fetchGifs'
import GifsContext from '../context/GifsContext'
export default function useGifs(keyword, rating) {
  const { gifs, setGifs } = useContext(GifsContext)

  const keywordFetch =
    keyword || localStorage.getItem('lastKeyword') || 'search'

  useEffect(
    function () {
      fetchGifs(keywordFetch, rating).then((gifs) => {
        setGifs(gifs)
      })
    },
    [keywordFetch, rating, keyword, setGifs]
  )
  return gifs
}
