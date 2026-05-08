export const APP_CONFIG = {
  appName: 'mobile-h5-app',
  defaultRouteName: 'home',
  defaultRoutePath: '/home',
  apiTimeout: 10000,
  storagePrefix: 'mobile_app_'
}

export const HTTP_STATUS = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
}

export const ROUTES = {
  HOME: '/home',
  LOGIN: '/login',
  MINE: '/mine',
  NOT_FOUND: '/:pathMatch(.*)*'
}