<script lang="ts" setup>
const { isVisible, elementRef } = useScrollAnimation()

const listProjects = ref([
  {
    title: 'QUIZZFLY',
    description: 'Quizzfly is a quiz app that allows you to create quizzes and play quizzes. It is built with Vue 3, Tailwind CSS, Pinia, Vueuse, and Color Mode.',
    icon: 'i-mdi-github',
    images: [
      new URL('@/assets/images/quizzfly-2.png', import.meta.url).href,
      new URL('@/assets/images/quizzfly-1.png', import.meta.url).href,
    ]
  },
  {
    title: 'CV.MAKER',
    description: 'A CV builder and analyzer powered by AI. This project helps users create, edit, and evaluate their resumes with automated quality scoring.',
    icon: 'i-mdi-github',
    images: [
      new URL('@/assets/images/cvmaker-1.png', import.meta.url).href,
      new URL('@/assets/images/cvmaker-2.png', import.meta.url).href,
      new URL('@/assets/images/cvmaker-3.png', import.meta.url).href,
    ]
  },
  {
    title: 'Portfolio',
    description: 'An open source portfolio template for developers. This is a side project that I built to practice my skills.',
    icon: 'i-mdi-github',
    images: [
      new URL('@/assets/images/portfolio.png', import.meta.url).href,
      new URL('@/assets/images/portfolio-1.png', import.meta.url).href,
    ]
  },
])

const activeProject = ref<any>(null)

const handleActiveProject = (item: any) => {
  activeProject.value = item
}

onMounted(() => {
    activeProject.value = listProjects.value[0]
})
</script>

<template>
  <div ref="elementRef" class="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center pb-12 sm:pb-16 md:pb-20 lg:pb-[80px] w-full">
    <div class="bg-[#161513] w-full bg-dark-dots px-4 sm:px-8 md:px-12 lg:px-20">
      <div :class="['pb-12 sm:pb-16 md:pb-20 lg:pb-[80px] pt-8 sm:pt-12 md:pt-16 lg:pt-[40px]', isVisible ? 'animate-slideInLeft' : 'opacity-0']">
        <h3 class="text-gradient font-medium text-sm sm:text-base md:text-[18px] text-left">My impressive projects</h3>
        <div class="flex justify-center sm:justify-start flex-col items-start relative w-full">
          <h1 class="text-white text-[24px] sm:text-[28px] md:text-[32px] font-bold z-[99] absolute">Projects</h1>
          <div class="w-6 h-5 sm:w-7 sm:h-6 md:w-8 md:h-6 mt-6 sm:mt-7 md:mt-8">
            <img src="@/assets/images/gradient-shape.svg" class="w-full h-full" alt="" />
          </div>
        </div>
        <p class="text-white font-medium my-4 sm:my-6 w-full sm:w-[350px] md:w-[400px] text-sm sm:text-base text-left">
          Built as a skill-sharpening experiment, this side project might surprise you. Let's discover it!
        </p>
        <div class="flex justify-start">
          <a  
            href="https://github.com/trungdong11" 
            target="_blank"
            class="px-4 sm:px-5 md:px-[20px] py-2 sm:py-2.5 md:py-[10px] rounded-full cursor-pointer font-medium text-sm sm:text-base md:text-[16px] text-white bg-primary-gradient flex items-center max-w-[140px] sm:max-w-[152px] hover:scale-105 transition-transform duration-300">
            <span>See more</span>
            <Icon name="i-ic-round-read-more" class="!h-5 !w-5 sm:!h-6 sm:!w-6 text-white ml-2 sm:ml-3" />
          </a>
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-24 w-full mt-8 sm:mt-6 md:mt-8">
      <!-- List Projects -->
      <div class="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:w-[35%] order-2 lg:order-1">
        <div 
          v-for="item in listProjects"
          :key="item.title"
          class="cursor-pointer"
          @click="handleActiveProject(item)"
        >
          <projects-card-project 
            :title="item?.title"
            :description="item?.description"
            :icon="item?.icon"
            :is-active="activeProject?.title === item.title"
          />
        </div>
      </div>

      <!-- Project Slide - Show first on mobile -->
      <div class="w-full lg:w-[65%] order-1 lg:order-2">
        <projects-card-slide
          v-if="activeProject"
          :title="activeProject.title"
          :description="activeProject.description"
          :images="activeProject.images"
        />
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

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (min-width: 640px) {
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-75px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

@media (min-width: 1024px) {
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.animate-slideInLeft {
  animation: slideInLeft 0.6s ease-out forwards;
}
</style>
