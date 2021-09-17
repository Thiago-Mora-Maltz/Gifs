const gifsKey = 'AGDN4LsmCYKsTQOTEpKBv0MnKJLMgG2R'

const fetchGifs = (keyword, rating, page) => {
  const limit = 24
  let offset = page * limit
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${gifsKey}&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en`
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const { data } = response
      return data
    })
}

export default fetchGifs
