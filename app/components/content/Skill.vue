<script lang="ts" setup>
const { isVisible, elementRef } = useScrollAnimation()
</script>

<template>
    <div ref="elementRef" class="flex flex-col gap-4 sm:gap-6 md:gap-8 py-12 sm:py-16 md:py-20 lg:py-[80px] bg-[#161513] w-full bg-dark-dots px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div class="flex justify-center flex-col items-center relative w-full">
            <h1 :class="['text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold z-[99] absolute', isVisible ? 'animate-slideInDown' : 'opacity-0']">Skill & Services</h1>
            <div :class="['w-16 h-6 sm:w-18 sm:h-6 md:w-20 md:h-7 mt-8 sm:mt-9 md:mt-10 ml-0 sm:ml-20 md:ml-32 lg:ml-40', isVisible ? 'animate-slideInRight' : 'opacity-0']">
                <img src="@/assets/images/gradient-shape.svg" class="w-full h-full" alt="" />
            </div>
        </div>
        <div class="flex flex-col mt-6 sm:mt-7 md:mt-8">
            <div class="flex flex-col gap-3 sm:gap-4 md:gap-2 text-white">
                <p class="text-sm sm:text-base md:text-base font-medium sm:text-left">My favorite tech stack & tools:</p>
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-3">
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
                    <div class="mx-1 sm:mx-2 w-[1px] sm:w-[2px] h-[16px] sm:h-[20px] bg-white"></div>
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
                <div class="mt-4 sm:mt-6 md:mt-8">
                    <common-flow-chart />
                </div>
            </div>
            
        </div>
    </div>
</template>
<style scoped>
.bg-dark-dots {
  background-color: #161513;
  background-image: radial-gradient(#2a2927 1px, transparent 1px);
  background-size: 16px 16px; /* smaller dots for mobile */
}

@media (min-width: 640px) {
  .bg-dark-dots {
    background-size: 20px 20px; /* medium dots for tablet */
  }
}

@media (min-width: 1024px) {
  .bg-dark-dots {
    background-size: 24px 24px; /* original dots for desktop */
  }
}

.bg-light-dots {
  background-color: #fdfdfd;
  background-image: radial-gradient(#cccccc 1px, transparent 1px);
  background-size: 16px 16px;
}

@media (min-width: 640px) {
  .bg-light-dots {
    background-size: 20px 20px;
  }
}

@media (min-width: 1024px) {
  .bg-light-dots {
    background-size: 24px 24px;
  }
}

@keyframes slideInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 640px) {
  @keyframes slideInDown {
    0% {
      opacity: 0;
      transform: translateY(-75px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (min-width: 1024px) {
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
}

.animate-slideInDown {
  animation: slideInDown 0.4s ease-out forwards;
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (min-width: 640px) {
  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(75px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

@media (min-width: 1024px) {
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
}

.animate-slideInRight {
  animation: slideInRight 0.4s ease-out forwards;
}
</style>
