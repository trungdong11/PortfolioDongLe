<template>
    <div
      class="relative bg-[#1E1D1A] rounded-2xl border border-[#3a3935] shadow-md p-6 w-full flex flex-col gap-4"
      :class="{'!border-[#c94c8b]': isActive}"
    >
      <!-- Header -->
      <div class="flex items-start gap-3">
        <!-- Icon circle -->
        <div
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-[#2A2926] shadow-md"
        >
            <Icon :name="icon" class="!h-5 !w-5 text-white" />
        </div>
  
        <!-- Title + subtitle -->
        <div class="flex flex-col">
          <h2 
            class="text-white font-semibold text-lg"
            :class="{'!bg-gradient': isActive}"
          >{{ title }}</h2>
          <p class="text-sm text-white/80">{{ description }}</p>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
    defineProps<{
        title: string;
        description?: string;
        icon?: string;
        isActive?: boolean;
    }>();
</script>
  