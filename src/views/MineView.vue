<template>
  <PageContainer>
    <PageHeader title="我的" :show-back="false" />

    <div class="mine-content">
      <!-- 用户信息卡片 -->
      <div v-if="userStore.isLoggedIn" class="user-card">
        <div class="user-info">
          <van-image
            round
            width="64px"
            height="64px"
            :src="userStore.userInfo?.avatar || '/default-avatar.png'"
          />
          <div class="user-details">
            <div class="user-name">{{ userStore.userInfo?.nickname || '用户' }}</div>
            <div class="user-phone">{{ userStore.userInfo?.phone }}</div>
          </div>
          <van-icon name="arrow" size="16" color="#999" />
        </div>
      </div>

      <!-- 功能菜单 -->
      <div class="menu-section">
        <div class="menu-group">
          <div class="menu-item">
            <van-icon name="user-o" size="20" color="#1976D2" />
            <span>个人信息</span>
            <van-icon name="arrow" size="16" color="#999" />
          </div>
          <div class="menu-item">
            <van-icon name="setting-o" size="20" color="#FF9800" />
            <span>账户设置</span>
            <van-icon name="arrow" size="16" color="#999" />
          </div>
          <div class="menu-item">
            <van-icon name="bell-o" size="20" color="#4CAF50" />
            <span>消息通知</span>
            <van-icon name="arrow" size="16" color="#999" />
          </div>
        </div>

        <div class="menu-group">
          <div class="menu-item">
            <van-icon name="question-o" size="20" color="#9C27B0" />
            <span>帮助中心</span>
            <van-icon name="arrow" size="16" color="#999" />
          </div>
          <div class="menu-item">
            <van-icon name="info-o" size="20" color="#607D8B" />
            <span>关于我们</span>
            <van-icon name="arrow" size="16" color="#999" />
          </div>
        </div>

        <div class="menu-group">
          <div class="menu-item" @click="handleLogout">
            <van-icon name="revoke" size="20" color="#F44336" />
            <span class="logout-text">退出登录</span>
            <van-icon name="arrow" size="16" color="#999" />
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { showDialog, showToast } from 'vant'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

function handleLogout() {
  showDialog({
    title: '确认退出',
    message: '确定要退出登录吗？',
    showCancelButton: true,
    confirmButtonText: '退出',
    cancelButtonText: '取消',
    confirmButtonColor: '#F44336'
  }).then((action) => {
    if (action === 'confirm') {
      userStore.logout()
      showToast('已退出登录')
      router.replace('/login')
    }
  })
}
</script>

<style scoped>
.mine-content {
  padding: 16px;
}

.user-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  color: white;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-details {
  flex: 1;
}

.user-name {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
}

.user-phone {
  font-size: 14px;
  opacity: 0.8;
}

.menu-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-group {
  background: white;
  border-radius: 12px;
  overflow: hidden;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  gap: 12px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item:hover {
  background-color: #f8f9fa;
}

.menu-item span {
  flex: 1;
  font-size: 16px;
  color: #333;
}

.logout-text {
  color: #F44336 !important;
}
</style>