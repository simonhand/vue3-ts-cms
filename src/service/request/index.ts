import axios, { AxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'
import { ZLAxiosRequestConfig, ZLRequestInterceptor } from './type'

class ZLRequest {
  instance: AxiosInstance
  interceptors?: ZLRequestInterceptor
  constructor(config: ZLAxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptor
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default ZLRequest
