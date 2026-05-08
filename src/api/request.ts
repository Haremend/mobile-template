import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { storage } from '@/utils/storage'
import { APP_CONFIG, HTTP_STATUS } from '@/config/app'

export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
  success: boolean
}

class HttpRequest {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      timeout: APP_CONFIG.apiTimeout,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.setupInterceptors()
  }

  private setupInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const token = storage.get('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        const { data } = response

        if (data.code === HTTP_STATUS.SUCCESS) {
          return data
        } else if (data.code === HTTP_STATUS.UNAUTHORIZED) {
          // 清除token并跳转登录
          storage.remove('token')
          window.location.href = '/login'
          return Promise.reject(new Error('未授权，请重新登录'))
        } else {
          return Promise.reject(new Error(data.message || '请求失败'))
        }
      },
      (error) => {
        if (error.response) {
          switch (error.response.status) {
            case HTTP_STATUS.UNAUTHORIZED:
              storage.remove('token')
              window.location.href = '/login'
              break
            case HTTP_STATUS.FORBIDDEN:
              console.error('没有权限访问')
              break
            case HTTP_STATUS.NOT_FOUND:
              console.error('请求的资源不存在')
              break
            case HTTP_STATUS.SERVER_ERROR:
              console.error('服务器内部错误')
              break
            default:
              console.error('请求失败:', error.message)
          }
        } else {
          console.error('网络错误:', error.message)
        }
        return Promise.reject(error)
      }
    )
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.get(url, config)
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.instance.post(url, data, config)
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.instance.put(url, data, config)
  }

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.delete(url, config)
  }
}

export const request = new HttpRequest()