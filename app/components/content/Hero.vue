<script lang="ts" setup>
const { isVisible, elementRef } = useScrollAnimation()

const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
    <div ref="elementRef" class="flex flex-col gap-4 justify-center items-center py-[80px]">
        <div class="">
            <img src="@/assets/images/avatar.png" :class="['h-[240px] w-[240px] rounded-full object-cover', isVisible ? 'bounce-once' : 'opacity-0']" alt="" />
        </div>
        <div :class="['intro w-[65%] font-bold leading-[68px] text-center', isVisible ? 'animate-slideInLeft' : 'opacity-0']">
            <p class="text-white text-[60px]">Hi! I'm <span class="text-gradient">DongLe</span>,</p>
            <p class="text-white text-[48px]">frontend developer based in VietNam.</p>
        </div>
        <p :class="['text-white w-[50%] font-medium text-center', isVisible ? 'animate-slideInRight' : 'opacity-0']">I am a frontend developer from DaNang, VietNam with 3 years of experience in multiple companies, where I have worked on real-world projects and focused on creating seamless, user-friendly experiences.</p>
        <div class="btn flex items-center gap-8 mt-4">
            <button @click="scrollToContact" class="min-w-[200px] px-[30px] py-[18px] rounded-full cursor-pointer font-medium text-lg text-white bg-primary-gradient">
                Connect with me
            </button>
            <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="blank" class="min-w-[200px] text-center px-[30px] py-[18px] rounded-full cursor-pointer font-medium text-lg border-2 border-white text-gradient">About me</a>
        </div>
    </div>
</template>
  
<style scoped>
.bounce-once {
  animation: bounce-once 1.5s ease-out forwards;
}

@keyframes bounce-once {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  60% {
    opacity: 1;
    transform: translateY(0);
  }
  75% {
    transform: translateY(-30px);
  }
  90% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

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

.animate-slideInLeft {
  animation: slideInLeft 0.4s ease-out forwards;
}

.animate-slideInRight {
  animation: slideInRight 0.4s ease-out forwards;
}

</style>