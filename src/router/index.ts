import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { APP_CONFIG, ROUTES } from '@/config/app'
import { useUserStore } from '@/stores/user'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: APP_CONFIG.defaultRoutePath
  },
  {
    path: ROUTES.HOME,
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '首页',
      requiresAuth: false
    }
  },
  {
    path: ROUTES.LOGIN,
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      title: '登录',
      requiresAuth: false
    }
  },
  {
    path: ROUTES.MINE,
    name: 'mine',
    component: () => import('@/views/MineView.vue'),
    meta: {
      title: '我的',
      requiresAuth: true
    }
  },
  {
    path: ROUTES.NOT_FOUND,
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: '页面未找到',
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const { requiresAuth, title } = to.meta

  // 设置页面标题
  if (title) {
    document.title = `${title} - ${APP_CONFIG.appName}`
  }

  // 权限检查
  if (requiresAuth && !userStore.isLoggedIn) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else if (to.name === 'login' && userStore.isLoggedIn) {
    // 已登录用户访问登录页，跳转到首页
    next(APP_CONFIG.defaultRoutePath)
  } else {
    next()
  }
})

export default router