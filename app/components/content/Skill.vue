<script lang="ts" setup>
const { isVisible, elementRef } = useScrollAnimation()
</script>

<template>
    <div ref="elementRef" class="flex flex-col gap-4 py-[80px] bg-[#161513] w-full bg-dark-dots">
        <div class="flex justify-center flex-col items-center relative w-full">
            <h1 :class="['text-white text-[40px] font-bold z-[99] absolute', isVisible ? 'animate-slideInDown' : 'opacity-0']">Skill & Services</h1>
            <div :class="['w-20 h-7 mt-10 ml-40', isVisible ? 'animate-slideInRight' : 'opacity-0']">
                <img src="@/assets/images/gradient-shape.svg" class="w-20 h-7" alt="" />
            </div>
        </div>
        <div class="flex flex-col px-20 mt-8">
            <div class="flex flex-col gap-2 text-white">
                <p class="text-base font-medium">My favorite tech stack & tools:</p>
                <div class="flex items-center gap-3">
                    <common-icon-with-tooltip
                        icon="i-lineicons-nodejs"
                        tooltip="Js"
                        hoverColor="hover:text-yellow-400"
                    />
                    <common-icon-with-tooltip
                        icon="i-proicons-vuejs"
                        tooltip="Vuejs"
                        hoverColor="hover:text-green-400"
                    />
                    <common-icon-with-tooltip
                        icon="i-teenyicons-nuxtjs-solid"
                        tooltip="Nuxtjs"
                        hoverColor="hover:text-green-400"
                    />
                    <common-icon-with-tooltip
                        icon="i-mdi-language-python"
                        tooltip="Python"
                        hoverColor="hover:text-[#306998]"
                    />
                    <common-icon-with-tooltip
                        icon="i-lineicons-typescript"
                        tooltip="Typescript"
                        hoverColor="hover:text-[#3078c6]"
                    />
                    <common-icon-with-tooltip
                        icon="i-lineicons-vite"
                        tooltip="Vite"
                        hoverColor="hover:text-[#9566fd]"
                    />
                    <common-icon-with-tooltip
                        icon="i-ri-tailwind-css-fill"
                        tooltip="Tailwind"
                        hoverColor="hover:text-[#38bdf9]"
                    />
                    <div class="mx-2 w-[2px] h-[20px] bg-white"></div>
                    <common-icon-with-tooltip
                        icon="i-humbleicons-git"
                        tooltip="Gitflow"
                        hoverColor="hover:text-[#f34f29]"
                    />
                    <common-icon-with-tooltip
                        icon="i-devicon-plain-postman"
                        tooltip="Postman"
                        hoverColor="hover:text-[#f37036]"
                    />
                    <common-icon-with-tooltip
                        icon="i-mdi-jira"
                        tooltip="Jira"
                        hoverColor="hover:text-[#172B4D]"
                    />
                </div>
                <common-flow-chart />
            </div>
            
        </div>
    </div>
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

@keyframes slideInDown {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideInDown {
  animation: slideInDown 0.4s ease-out forwards;
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slideInRight {
  animation: slideInRight 0.4s ease-out forwards;
}
</style>
