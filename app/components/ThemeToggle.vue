<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="max-sm:hidden rounded-full transition-colors duration-300 cursor-pointer mt-1"
  >
    <Icon v-if="colorMode.value === 'dark'" name="i-material-symbols-sunny-outline" class="!h-6 !w-6 text-yellow-300" />
    <Icon v-else name="i-material-symbols-dark-mode-outline-rounded" class="!h-6 !w-6 text-blue-900" />
  </button>
</template>
