<template>
  <PageContainer>
    <div class="not-found">
      <EmptyState
        image="error"
        description="页面不存在"
      >
        <van-button type="primary" @click="goHome">
          返回首页
        </van-button>
      </EmptyState>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.replace('/home')
}
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - 44px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>