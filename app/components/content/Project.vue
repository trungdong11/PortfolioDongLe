<script lang="ts" setup>
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
  <div class="flex flex-col gap-4 justify-center items-center pb-[80px] w-full">
    <div class="bg-[#161513] w-full bg-dark-dots px-20">
      <div class="py-[80px]">
        <h3 class="text-gradient font-medium text-[18px]">My impressive projects</h3>
        <div class="flex justify-center flex-col items-start relative w-full">
          <h1 class="text-white text-[32px] font-bold z-[99] absolute">Projects</h1>
          <div class="w-8 mt-8 ">
            <img src="@/assets/images/gradient-shape.svg" class="w-8" alt="" />
          </div>
        </div>
        <p class="text-white font-medium my-4 w-[400px]">
          Built as a skill-sharpening experiment, this side project might surprise you. Let’s discover it!
        </p>
        <a  
          href="https://github.com/trungdong11" 
          target="_blank"
          class="px-[20px] py-[10px] rounded-full cursor-pointer font-medium text-[16px] text-white bg-primary-gradient flex items-center max-w-[152px]">
          <span>See more</span>
          <Icon name="i-ic-round-read-more" class="!h-6 !w-6 text-white ml-3" />
        </a>
      </div>
    </div>

    <div class="px-20 flex justify-between gap-24 w-full mt-4">
      <!-- List Projects -->
      <div class="flex flex-col gap-6 w-[40%]">
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

      <projects-card-slide
        v-if="activeProject"
        :title="activeProject.title"
        :description="activeProject.description"
        :images="activeProject.images"
      />
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
</style>
