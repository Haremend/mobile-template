<template>
  <div class="empty-state">
    <van-empty
      :image="image"
      :description="description"
    >
      <slot />
    </van-empty>
  </div>
</template>

<script setup lang="ts">
import { Empty as VanEmpty } from 'vant'

interface Props {
  image?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  image: 'default',
  description: '暂无数据'
})
</script>

<style scoped>
.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 40px 0;
}
</style>