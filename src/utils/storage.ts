import { APP_CONFIG } from '@/config/app'

const { storagePrefix } = APP_CONFIG

/**
 * 本地存储封装
 */
export const storage = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(storagePrefix + key)
    } catch (error) {
      console.error('Storage get error:', error)
      return null
    }
  },

  set(key: string, value: string): boolean {
    try {
      localStorage.setItem(storagePrefix + key, value)
      return true
    } catch (error) {
      console.error('Storage set error:', error)
      return false
    }
  },

  remove(key: string): boolean {
    try {
      localStorage.removeItem(storagePrefix + key)
      return true
    } catch (error) {
      console.error('Storage remove error:', error)
      return false
    }
  },

  clear(): boolean {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(storagePrefix)) {
          localStorage.removeItem(key)
        }
      })
      return true
    } catch (error) {
      console.error('Storage clear error:', error)
      return false
    }
  }
}