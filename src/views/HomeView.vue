<template>
  <PageContainer>
    <PageHeader title="首页" :show-back="false" />

    <div class="home-content">
      <!-- 欢迎区域 -->
      <div class="welcome-section">
        <div v-if="userStore.isLoggedIn" class="user-info">
          <van-image
            round
            width="48px"
            height="48px"
            :src="userStore.userInfo?.avatar || '/default-avatar.png'"
          />
          <div class="user-text">
            <div class="user-name">你好，{{ userStore.userInfo?.nickname || '用户' }}</div>
            <div class="user-desc">欢迎使用移动端应用</div>
          </div>
        </div>
        <div v-else class="guest-info">
          <van-icon name="user-circle-o" size="48" color="#999" />
          <div class="guest-text">
            <div class="guest-title">未登录</div>
            <div class="guest-desc" @click="goToLogin">点击登录体验更多功能</div>
          </div>
        </div>
      </div>

      <!-- 快捷功能区 -->
      <div class="quick-actions">
        <div class="section-title">常用功能</div>
        <div class="actions-grid">
          <div class="action-item" @click="goToPage('mine')">
            <van-icon name="user-o" size="24" color="#1976D2" />
            <span>我的信息</span>
          </div>
          <div class="action-item" @click="showToast('消息通知功能开发中')">
            <van-icon name="bell-o" size="24" color="#FF9800" />
            <span>消息通知</span>
          </div>
          <div class="action-item" @click="showToast('表单示例功能开发中')">
            <van-icon name="edit" size="24" color="#4CAF50" />
            <span>表单示例</span>
          </div>
          <div class="action-item" @click="showToast('列表示例功能开发中')">
            <van-icon name="orders-o" size="24" color="#9C27B0" />
            <span>列表示例</span>
          </div>
          <div class="action-item" @click="showToast('文件上传功能开发中')">
            <van-icon name="photograph" size="24" color="#FF5722" />
            <span>文件上传</span>
          </div>
          <div class="action-item" @click="showToast('设置中心功能开发中')">
            <van-icon name="setting-o" size="24" color="#607D8B" />
            <span>设置中心</span>
          </div>
          <div class="action-item" @click="showToast('关于页面功能开发中')">
            <van-icon name="info-o" size="24" color="#795548" />
            <span>关于页面</span>
          </div>
        </div>
      </div>

      <!-- 公告区域 -->
      <div class="notice-section">
        <div class="section-title">公告通知</div>
        <div class="notice-list">
          <div class="notice-item">
            <div class="notice-title">系统维护通知</div>
            <div class="notice-time">2024-01-01 10:00</div>
          </div>
          <div class="notice-item">
            <div class="notice-title">新功能上线</div>
            <div class="notice-time">2024-01-02 14:30</div>
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

function goToPage(name: string) {
  if (name === 'mine' && !userStore.isLoggedIn) {
    goToLogin()
    return
  }
  router.push({ name })
}

function goToLogin() {
  router.push({ name: 'login', query: { redirect: '/home' } })
}
</script>

<style scoped>
.home-content {
  padding: 16px;
}

.welcome-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  color: white;
}

.user-info,
.guest-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-text,
.guest-text {
  flex: 1;
}

.user-name {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
}

.user-desc {
  font-size: 14px;
  opacity: 0.8;
}

.guest-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
}

.guest-desc {
  font-size: 14px;
  opacity: 0.8;
  text-decoration: underline;
  cursor: pointer;
}

.quick-actions {
  margin-bottom: 24px;
}

.section-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 16px;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  background: white;
  border-radius: 12px;
  padding: 20px;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-item:hover {
  transform: translateY(-2px);
}

.action-item span {
  font-size: 12px;
  color: #666;
  text-align: center;
}

.notice-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
}

.notice-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.notice-item {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.notice-item:last-child {
  border-bottom: none;
}

.notice-title {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.notice-time {
  font-size: 12px;
  color: #999;
}
</style>