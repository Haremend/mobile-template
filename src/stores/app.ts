import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { APP_CONFIG } from '@/config/app'

export const useAppStore = defineStore('app', () => {
  const loading = ref(false)
  const appTitle = ref(import.meta.env.VITE_APP_TITLE || APP_CONFIG.appName)
  const currentRoute = ref('')

  const isLoading = computed(() => loading.value)

  function setLoading(status: boolean) {
    loading.value = status
  }

  function setTitle(title: string) {
    appTitle.value = title
    document.title = title
  }

  function setCurrentRoute(route: string) {
    currentRoute.value = route
  }

  return {
    loading,
    appTitle,
    currentRoute,
    isLoading,
    setLoading,
    setTitle,
    setCurrentRoute
  }
})