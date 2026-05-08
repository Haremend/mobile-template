<template>
  <div class="page-header">
    <div class="header-left">
      <van-icon
        v-if="showBack"
        name="arrow-left"
        @click="handleBack"
        class="back-icon"
      />
    </div>
    <div class="header-title">{{ title }}</div>
    <div class="header-right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  title: string
  showBack?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showBack: true
})

const router = useRouter()

function handleBack() {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 16px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left {
  width: 60px;
  display: flex;
  align-items: center;
}

.header-title {
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.header-right {
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.back-icon {
  font-size: 20px;
  color: #333;
}
</style>