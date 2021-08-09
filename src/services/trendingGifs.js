const gifsKey = 'AGDN4LsmCYKsTQOTEpKBv0MnKJLMgG2R'

const trendingGifs = () => {
  return fetch(`https://api.giphy.com/v1/trending/searches?api_key=${gifsKey}`)
    .then((response) => response.json())
    .then((response) => {
      const { data } = response
      return data
    })
}

export default trendingGifs
