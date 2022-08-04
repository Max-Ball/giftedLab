
export const giffyApi = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  timeout: 4000
})

export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api'
})