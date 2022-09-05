import { AxiosResponse } from 'axios'
import type { AxiosRequestConfig } from 'axios'
interface ZLRequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface ZLAxiosRequestConfig extends AxiosRequestConfig {
  interceptor?: ZLRequestInterceptor
}

export { ZLRequestInterceptor, ZLAxiosRequestConfig }
