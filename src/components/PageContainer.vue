<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
// 页面容器组件，提供统一的页面布局
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>