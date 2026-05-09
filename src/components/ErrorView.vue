<template>
  <div class="error-view">
    <div class="error-content">
      <van-icon name="warning-o" size="48" color="#ff4d4f" />
      <div class="error-title">{{ title }}</div>
      <div class="error-description">{{ description }}</div>
      <van-button
        v-if="showRetry"
        type="primary"
        size="small"
        class="retry-button"
        @click="handleRetry"
      >
        重试
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon as VanIcon } from 'vant'
import { Button as VanButton } from 'vant'

interface Props {
  title?: string
  description?: string
  showRetry?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '出错了',
  description: '请稍后重试',
  showRetry: true
})

const emit = defineEmits<{
  retry: []
}>()

function handleRetry() {
  emit('retry')
}
</script>

<style scoped>
.error-view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 40px 20px;
}

.error-content {
  text-align: center;
}

.error-title {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.error-description {
  margin-top: 8px;
  font-size: 14px;
  color: #999;
}

.retry-button {
  margin-top: 20px;
}
</style>