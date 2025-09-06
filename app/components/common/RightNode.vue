<template>
    <div
      ref="nodeRef"
      class="relative bg-[#1E1D1A] rounded-2xl border border-[#2A2926] shadow-md p-6 w-[420px] flex items-start gap-4"
    >
      <!-- Horizontal line -->
      <div class="absolute left-0 right-0 top-10 h-px bg-[#2A2926]"></div>
  
      <!-- Vertical line -->
      <div class="absolute left-8 top-10 bottom-0 w-px bg-[#2A2926]"></div>
  
      <!-- Icon circle -->
      <div
        class="relative z-10 flex-shrink-0 w-10 h-10 -top-[5px] right-[10px] flex items-center justify-center rounded-full shadow-md"
        :class="color"
      >
        <Icon :name="icon" class="!h-5 !w-5 text-white" />
      </div>
  
      <!-- Text content -->
      <div class="relative z-10 flex flex-col">
        <div class="bg-[#24231F] rounded-full px-5 py-1 mb-2">
          <h3 class="font-semibold text-white">{{ title }}</h3>
        </div>
        <p class="text-sm text-gray-300">
          {{ description }}
        </p>
      </div>
    </div>
</template>
  
<script setup lang="ts">
defineProps<{
    title: string;
    description?: string;
    icon?: string;
    color?: string;  
}>();

const nodeRef = ref<HTMLElement | null>(null);
defineExpose({ nodeRef });
</script>

