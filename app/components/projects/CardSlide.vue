<script setup lang="ts">
  defineProps<{
      title: string;
      description: string;
      images: Array<string>;
  }>();
</script>
<template>
  <div class="relative bg-[#1E1D1A] rounded-2xl border border-[#3a3935] shadow-md w-full flex flex-col gap-4 -mt-14">
    <!-- Header -->
    <div class="flex items-center gap-2 py-2 px-4 border-b border-[#3a3935]">
      <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
      <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
      <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      <div class="flex items-center justify-center gap-1 mx-auto bg-[#2A2926] px-2 py-1 rounded-lg">
        <Icon name="i-ri-github-fill" class="!h-4 !w-4 text-white" />
        <span class="text-xs text-gray-300">trungdong11/{{ title }}</span>
      </div>  
    </div>

    <div class="p-4 pt-0 flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <span class="bg-[#2A2926] h-[18px] w-5 rounded-md"></span>
        <span class="text-blue-400 font-medium text-[15px]">trungdong11 / {{ title }}</span>
        <span class="ml-4 px-3 py-0.5 rounded-full text-[13px] text-gray-300 border border-[#2A2926]">public</span>
      </div>
        <p class="text-white/80 text-s !min-h-[48px]">
          {{ description }}
        </p>
      <div class="flex items-center gap-2">
        <span class="bg-[#2A2926] h-[18px] w-5 rounded-md"></span>
        <p class="font-medium text-[15px] text-white/80">MIT license</p>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1">
          <span class="bg-[#2A2926] h-[18px] w-5 rounded-md"></span>
          <span class="bg-[#2A2926] h-[18px] w-14 rounded-md"></span>
        </div>
        <div class="flex items-center gap-1">
          <span class="bg-[#2A2926] h-[18px] w-5 rounded-md"></span>
          <span class="bg-[#2A2926] h-[18px] w-14 rounded-md"></span>
        </div>
      </div>

      <!-- README Card -->
      <div class="bg-[#2A2926] border border-[#3a3935] rounded-xl overflow-hidden">
        <div class="bg-[#252422] p-3 text-sm font-semibold text-white flex items-center gap-2">
          📖 README
        </div>

        <div class="p-4 flex flex-col gap-4 text-gray-200 text-sm max-h-[450px] overflow-y-auto">
          <!-- Image Demo 1 -->
          <div 
            class="rounded-lg border border-[#3a3935] w-full h-full"
            v-for="image in images"
            :key="image"
          >
            <img
              :src="image"
              alt="demo"
              class="w-full object-cover rounded-lg"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
