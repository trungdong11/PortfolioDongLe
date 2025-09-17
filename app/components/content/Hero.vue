<script lang="ts" setup>
const { isVisible, elementRef } = useScrollAnimation()

const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
    <div ref="elementRef" class="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center py-12 sm:py-16 md:py-20 lg:py-[80px] px-4 sm:px-6 md:px-8">
        <div class="">
            <img src="@/assets/images/avatar.png" :class="['h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px] lg:h-[240px] lg:w-[240px] rounded-full object-cover', isVisible ? 'bounce-once' : 'opacity-0']" alt="" />
        </div>
        <div :class="['intro w-[90%] sm:w-[80%] md:w-[75%] lg:w-[65%] font-bold leading-[1.1] sm:leading-[1.2] md:leading-[68px] text-center', isVisible ? 'animate-slideInLeft' : 'opacity-0']">
            <p class="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] mb-2 sm:mb-3 md:mb-4">Hi! I'm <span class="text-gradient">DongLe</span>,</p>
            <p class="text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">frontend developer based in VietNam.</p>
        </div>
        <p :class="['text-white w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] font-medium text-center text-sm sm:text-base md:text-lg leading-relaxed', isVisible ? 'animate-slideInRight' : 'opacity-0']">I am a frontend developer from DaNang, VietNam with 3 years of experience in multiple companies, where I have worked on real-world projects and focused on creating seamless, user-friendly experiences.</p>
        <div class="btn flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
            <button @click="scrollToContact" class="w-full sm:min-w-[180px] md:min-w-[200px] px-6 sm:px-8 md:px-[30px] py-3 sm:py-4 md:py-[18px] rounded-full cursor-pointer font-medium text-sm sm:text-base md:text-lg text-white bg-primary-gradient hover:scale-105 transition-transform duration-300">
                Connect with me
            </button>
            <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="blank" class="w-full sm:min-w-[180px] md:min-w-[200px] text-center px-6 sm:px-8 md:px-[30px] py-3 sm:py-4 md:py-[18px] rounded-full cursor-pointer font-medium text-sm sm:text-base md:text-lg border-2 border-white text-gradient hover:scale-105 transition-transform duration-300">About me</a>
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
    transform: translateY(-100px);
  }
  60% {
    opacity: 1;
    transform: translateY(0);
  }
  75% {
    transform: translateY(-15px);
  }
  90% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (min-width: 640px) {
  @keyframes bounce-once {
    0% {
      opacity: 0;
      transform: translateY(-150px);
    }
    60% {
      opacity: 1;
      transform: translateY(0);
    }
    75% {
      transform: translateY(-25px);
    }
    90% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0);
    }
  }
}

@media (min-width: 1024px) {
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
}

.animate-slideInLeft {
  animation: slideInLeft 0.4s ease-out forwards;
}

.animate-slideInRight {
  animation: slideInRight 0.4s ease-out forwards;
}

</style>