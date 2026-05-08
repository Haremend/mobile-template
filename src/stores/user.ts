import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { storage } from '@/utils/storage'
import { userApi, UserInfo } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo | null>(null)
  const token = ref<string>(storage.get('token') || '')

  const isLoggedIn = computed(() => !!token.value)

  function setUserInfo(info: UserInfo | null) {
    userInfo.value = info
  }

  function setToken(newToken: string) {
    token.value = newToken
    if (newToken) {
      storage.set('token', newToken)
    } else {
      storage.remove('token')
    }
  }

  function logout() {
    userInfo.value = null
    setToken('')
    storage.clear()
  }

  async function fetchUserInfo() {
    try {
      const response = await userApi.getUserInfo()
      if (response.success) {
        setUserInfo(response.data)
      }
      return response
    } catch (error) {
      console.error('获取用户信息失败:', error)
      throw error
    }
  }

  async function login(username: string, password: string) {
    try {
      const response = await userApi.login({ username, password })
      if (response.success) {
        setToken(response.data.token)
        setUserInfo(response.data.user)
      }
      return response
    } catch (error) {
      console.error('登录失败:', error)
      throw error
    }
  }

  return {
    userInfo,
    token,
    isLoggedIn,
    setUserInfo,
    setToken,
    logout,
    fetchUserInfo,
    login
  }
})