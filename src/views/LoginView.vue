<template>
  <PageContainer>
    <PageHeader title="登录" />

    <div class="login-content">
      <div class="login-form">
        <div class="login-title">欢迎登录</div>
        <div class="login-subtitle">请输入您的账号密码</div>

        <van-form class="form" @submit="onSubmit">
          <van-field
            v-model="form.username"
            name="username"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="form.password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />

          <div class="form-actions">
            <van-button
              round
              block
              type="primary"
              :loading="loading"
              native-type="submit"
            >
              登录
            </van-button>
          </div>
        </van-form>

        <div class="login-footer">
          <div class="demo-tip">
            <van-icon name="info-o" size="16" />
            <span>演示账号：admin / 123456</span>
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/stores/user'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const appStore = useAppStore()

const loading = ref(false)
const form = ref({
  username: '',
  password: ''
})

const onSubmit = async () => {
  try {
    loading.value = true
    appStore.setLoading(true)

    // 演示登录逻辑
    if (form.value.username === 'admin' && form.value.password === '123456') {
      const mockUser = {
        id: '1',
        username: 'admin',
        nickname: '管理员',
        avatar: '',
        phone: '13800138000',
        email: 'admin@example.com',
        createdAt: '2024-01-01'
      }

      userStore.setUserInfo(mockUser)
      userStore.setToken('demo-token-123')

      showToast('登录成功')

      const redirect = route.query.redirect as string
      router.replace(redirect || '/home')
    } else {
      showToast('用户名或密码错误')
    }
  } catch (error) {
    console.error('登录失败:', error)
    showToast('登录失败，请重试')
  } finally {
    loading.value = false
    appStore.setLoading(false)
  }
}
</script>

<style scoped>
.login-content {
  padding: 24px 16px;
  min-height: calc(100vh - 44px);
  background-color: #f5f5f5;
}

.login-form {
  background: white;
  border-radius: 12px;
  padding: 32px 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 8px;
}

.login-subtitle {
  font-size: 14px;
  color: #999;
  text-align: center;
  margin-bottom: 32px;
}

.form {
  margin-bottom: 24px;
}

.form-actions {
  margin-top: 24px;
}

.login-footer {
  margin-top: 24px;
  text-align: center;
}

.demo-tip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  color: #999;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
}
</style>