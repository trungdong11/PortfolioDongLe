<template>
    <div
      ref="nodeRef"
      class="relative bg-[#1E1D1A] rounded-2xl border border-[#2A2926] shadow-md p-6 w-80 flex flex-col gap-4"
    >
      <!-- Header -->
      <div class="flex items-start gap-3">
        <!-- Icon circle -->
        <div
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-gradient shadow-md"
        >
            <Icon name="i-material-symbols-checklist-rtl-rounded" class="!h-5 !w-5 text-white" />
        </div>
  
        <!-- Title + subtitle -->
        <div class="flex flex-col">
          <h2 class="text-white font-semibold text-lg">{{ title }}</h2>
          <p class="text-sm text-gray-400">{{ subtitle }}</p>
        </div>
      </div>
  
      <!-- Items list -->
      <ul v-if="items?.length" class="space-y-2 mt-2">
        <li
          v-for="(item, idx) in items"
          :key="idx"
          class="flex items-center justify-between bg-[#24231F] rounded-xl px-4 py-2 text-gray-300"
        >
          <!-- Left content -->
          <div class="flex items-center gap-2">
            <Icon name="i-material-symbols-check-small-rounded" class="!h-5 !w-5 text-green-600" />
            <span>{{ item }}</span>
          </div>
  
          <!-- Connector circle -->
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title: string;
    subtitle?: string;
    items?: string[];
  }>();
  
  // expose ref cho CanvasConnector
  const nodeRef = ref<HTMLElement | null>(null);
  defineExpose({ nodeRef });
  </script>
  