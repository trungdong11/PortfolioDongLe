<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div
    class="fixed inset-0 z-0 pointer-events-none"
    :class="colorMode.value === 'dark' ? 'bg-dark-dots' : 'bg-light-dots'"
  />
</template>

<style scoped>
.bg-dark-dots {
  background-color: #161513;
  background-image: radial-gradient(#2a2927 1px, transparent 1px);
  background-size: 24px 24px; /* chỉnh spacing dot */
}

.bg-light-dots {
  background-color: #fdfdfd;
  background-image: radial-gradient(#cccccc 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>
