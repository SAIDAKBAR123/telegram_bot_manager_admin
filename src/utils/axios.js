import axios from 'axios'
console.log(process.env)
const request = axios.create({
  baseURL: process.env.NODE_ENV !== 'development' ? process.env.VUE_APP_BASE_TEST_URL : process.env.VUE_APP_BASE_URL,
  timeout: 12000
})

const errorHandler = (error, hooks) => {
  if (error.response) {
    console.log(error.response)

    if (error.response.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('persist:dashboard')
      window.location.href = '/'
    }
  }
  return Promise.reject(error.response)
}

// request interceptor
request.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

export default request
