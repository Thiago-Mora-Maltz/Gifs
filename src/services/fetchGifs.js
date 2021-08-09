const gifsKey = 'AGDN4LsmCYKsTQOTEpKBv0MnKJLMgG2R'

const fetchGifs = (keyword, rating) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${gifsKey}&q=${keyword}&limit=25&offset=0&rating=${rating}&lang=en`
  //  const trending = `api.giphy.com/v1/gifs/trending/api_key=${gifsKey}&limit=25&offset=0&rating=${rating}&lang=en`
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const { data } = response
      return data
    })
}

export default fetchGifs
