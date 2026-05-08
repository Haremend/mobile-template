import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import pinia from './stores'

// 样式导入
import 'vant/lib/index.css'
import './styles/index.scss'

// 移动端适配
import 'lib-flexible/flexible'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')

// 全局错误处理
app.config.errorHandler = (error, instance, info) => {
  console.error('全局错误:', error, instance, info)
}

// 全局未处理的Promise错误
window.addEventListener('unhandledrejection', (event) => {
  console.error('未处理的Promise错误:', event.reason)
  event.preventDefault()
})

// 移动端适配优化
if (typeof window !== 'undefined') {
  // 防止iOS双击缩放
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })

  // 防止iOS橡皮筋效果
  document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
      event.preventDefault()
    }
  }, { passive: false })
}