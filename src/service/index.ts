import ZLRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'

const zlRequest = new ZLRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptor: {
    requestInterceptor: (config) => config,
    requestInterceptorCatch: (error) => error,
    responseInterceptor: (config) => {
      console.log('拦截响应')
      return config.data
    },
    responseInterceptorCatch: (err) => err
  }
})
export default zlRequest
