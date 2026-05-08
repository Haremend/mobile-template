<template>
  <div class="submit-bar safe-area-bottom">
    <div class="submit-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// 底部操作栏组件
</script>

<style scoped>
.submit-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  z-index: 100;
}

.submit-content {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>