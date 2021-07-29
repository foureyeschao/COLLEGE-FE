import axios from 'axios'
import config from 'config'
import { message } from 'antd'

const TOKEN_INVALID = "Token is invalid, please sign in"
const NETWORK_ERROR = "The network request is abnormal, please try again later"

const service = axios.create({
  baseURL: config.mockApi,
  timeout: 8000,
})

service.interceptors.request.use((req) => {
  const headers = req.headers
  if (!headers.Authorization)
    headers.Authorization = 'Bear Victor888999'
  return req;
})

service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  } else if (code === 40001) {
    message.error(TOKEN_INVALID)

    return Promise.reject(TOKEN_INVALID)
  } else {
    message.error(NETWORK_ERROR || msg)
    return Promise.reject(NETWORK_ERROR || msg)
  }
})

const request = (options) => {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return service(options)
}

['get','post','put','delete','patch'].forEach((item) => {
  request[item] = (url,data,options) => {
    return request({
      url,
      data,
      method:item,
      ...options
    })
  }
})

export default request