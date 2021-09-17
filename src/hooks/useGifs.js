import { useEffect, useContext, useState } from 'react'
import fetchGifs from '../services/fetchGifs'
import GifsContext from '../context/GifsContext'

export default function useGifs(keyword, rating) {
  const INITIAL_PAGE = 0
  const { gifs, setGifs } = useContext(GifsContext)
  const [page, setPage] = useState(INITIAL_PAGE)
  const lastKeyword = localStorage.getItem('lastKeyword')
  const keywordFetch =
    keyword || (lastKeyword === null ? 'search' : lastKeyword)

  useEffect(
    function () {
      fetchGifs(keywordFetch, rating).then((gifs) => {
        setGifs(gifs)
      })
    },
    [keywordFetch, rating, keyword, setGifs]
  )

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return

      fetchGifs(keywordFetch, rating, page).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs))
      })
    },
    [keywordFetch, page, rating, setGifs]
  )

  return { gifs, setPage }
}
