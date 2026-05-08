import { request } from './request'

export interface UserInfo {
  id: string
  username: string
  nickname: string
  avatar: string
  phone: string
  email: string
  createdAt: string
}

export interface LoginParams {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  user: UserInfo
}

export const userApi = {
  /**
   * 用户登录
   */
  login(params: LoginParams) {
    return request.post<LoginResponse>('/user/login', params)
  },

  /**
   * 获取用户信息
   */
  getUserInfo() {
    return request.get<UserInfo>('/user/info')
  },

  /**
   * 更新用户信息
   */
  updateUserInfo(data: Partial<UserInfo>) {
    return request.put<UserInfo>('/user/info', data)
  },

  /**
   * 退出登录
   */
  logout() {
    return request.post('/user/logout')
  }
}