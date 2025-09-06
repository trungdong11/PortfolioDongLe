<script setup lang="ts">
interface Props {
  icon: string
  tooltip: string
  href?: string
  hoverColor?: string
}

const props = defineProps<Props>()
</script>

<template>
  <a
    :href="href"
    class="relative group flex items-center justify-center"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon
      :name="icon"
      class="!h-7 !w-7 text-white transition-colors duration-300"
      :class="hoverColor"
    />
    <!-- Tooltip -->
    <span
      class="absolute bottom-full mb-2 hidden group-hover:block whitespace-nowrap
     bg-white text-black/60 text-xs px-2 py-1 rounded-lg shadow-lg"
    >
      {{ tooltip }}
    </span>
  </a>
</template>
