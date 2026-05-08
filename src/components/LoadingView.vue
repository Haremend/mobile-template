<template>
  <div class="loading-view">
    <van-loading type="spinner" size="24px">
      {{ text }}
    </van-loading>
  </div>
</template>

<script setup lang="ts">
import { Loading as VanLoading } from 'vant'

interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: '加载中...'
})
</script>

<style scoped>
.loading-view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 40px 0;
}
</style>