<script lang="ts" setup>
const { isVisible, elementRef } = useScrollAnimation()
</script>

<template>
  <div ref="elementRef" class="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-start py-12 sm:py-16 md:py-20 lg:py-[80px] bg-[#161513] w-full bg-dark-dots px-4 sm:px-8 md:px-12 lg:px-20">
    <div :class="[isVisible ? 'animate-slideInLeft' : 'opacity-0']">
        <h3 class="text-gradient font-medium text-sm sm:text-base md:text-[18px]">Work</h3>
        <div class="flex justify-start flex-col items-start relative w-full">
          <h1 class="text-white text-[24px] sm:text-[28px] md:text-[32px] font-bold z-[99] absolute">Contact</h1>
          <div class="w-6 h-5 sm:w-7 sm:h-6 md:w-8 md:h-6 mt-6 sm:mt-7 md:mt-8">
            <img src="@/assets/images/gradient-shape.svg" class="w-full h-full" alt="" />
          </div>
        </div>
        <p class="text-white font-medium my-4 sm:my-6 w-full sm:w-[350px] md:w-[400px] text-sm sm:text-base">
            Get in touch with me anytime, through social media, e-mail, or phone number.
        </p>
    </div>
    <div class="flex gap-4 sm:gap-8 md:gap-12 lg:gap-16 h-full mt-6 sm:mt-7 md:mt-8">
        <div class="w-[1px] bg-[#2b2926] self-stretch hidden sm:block"></div>
        <div class="text-stone-300 space-y-8 sm:space-y-10 md:space-y-12 w-full sm:w-[85%] md:w-[80%] lg:w-[70%]">
            <!-- Note -->
            <p class="text-sm leading-6 text-stone-400">
                Just a friendly reminder that the information provided here is for
                <strong class="text-stone-200 font-semibold">business purposes only</strong>.
                If you have any questions, feel free to chat with me directly on my social media.
                I appreciate your understanding in using this responsibly.
            </p>
        
            <!-- Divider -->
            <div class="border-t border-[#2b2926]/80"></div>
        
            <!-- Contact -->
            <section class="space-y-4">
                <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-stone-100">Contact</h2>
        
                <div class="overflow-hidden rounded-xl border border-[#2b2926] overflow-x-auto">
                <table class="w-full text-xs sm:text-sm">
                    <thead class="bg-[#1b1916] text-stone-300">
                    <tr class="border-b border-[#24221f]">
                        <th class="px-4 py-2 text-left font-medium">Contact</th>
                        <th class="px-4 py-2 text-left font-medium">Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="border-b border-[#24221f] hover:bg-[#1a1815]/60 transition">
                        <td class="px-2 sm:px-4 py-2 sm:py-3 text-stone-400">Address</td>
                        <td class="px-2 sm:px-4 py-2 sm:py-3">DaNang, VietNam</td>
                    </tr>
                    <tr class="border-b border-[#24221f] hover:bg-[#1a1815]/60 transition">
                        <td class="px-2 sm:px-4 py-2 sm:py-3 text-stone-400">Timezone</td>
                        <td class="px-2 sm:px-4 py-2 sm:py-3">GMT+7</td>
                    </tr>
                    <tr class="hover:bg-[#1a1815]/60 transition">
                        <td class="px-2 sm:px-4 py-2 sm:py-3 text-stone-400">E-mail</td>
                        <td class="px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-4 sm:h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M4 4h16v16H4z" stroke-width="1.5" />
                            <path d="M4 7l8 6 8-6" stroke-width="1.5" />
                        </svg>
                        <a href="mailto:trungdong0811@gmail.com"
                            class="underline underline-offset-2 text-sky-300 hover:text-sky-200 transition break-all sm:break-normal">
                            trungdong0811@gmail.com
                        </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
        
                <p class="text-sm text-stone-400 leading-6">
                If you need any further information, such as my phone number, please do not hesitate to send me an email first.
                </p>
            </section>
        
            <!-- Divider -->
            <div class="border-t border-[#2b2926]/80"></div>
        
            <!-- Social Media -->
            <section class="space-y-4">
                <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-stone-100">Social Media</h2>
        
                <p class="text-xs sm:text-sm text-stone-400 leading-5 sm:leading-6">
                If you want to find me on social media, just search for
                <span class="font-semibold text-stone-200">@TrungDong</span>.
                That's my username on almost all platforms, so it should be easy to find me.
                </p>
                <p class="text-xs sm:text-sm text-stone-400 leading-5 sm:leading-6">
                But if you're short on time, I've included some links to the social media platforms I use most frequently below.
                </p>
        
                <div class="overflow-hidden rounded-xl border border-[#2b2926] overflow-x-auto">
                <table class="w-full text-xs sm:text-sm">
                    <thead class="bg-[#1b1916] text-stone-300">
                    <tr class="border-b border-[#24221f]">
                        <th class="px-4 py-2 text-left font-medium">Social Media</th>
                        <th class="px-4 py-2 text-left font-medium">Profile URL</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="border-b border-[#24221f] hover:bg-[#1a1815]/60 transition">
                        <td class="px-2 sm:px-4 py-2 sm:py-3 text-stone-400">Github</td>
                        <td class="px-2 sm:px-4 py-2 sm:py-3">
                        <a href="https://github.com/trungdong11" target="_blank"
                            class="inline-flex items-center gap-1 underline underline-offset-2 text-sky-300 hover:text-sky-200 break-all sm:break-normal">
                            https://github.com/trungdong11
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M7 17L17 7" stroke-width="1.5"/>
                            <path d="M8 7h9v9" stroke-width="1.5"/>
                            </svg>
                        </a>
                        </td>
                    </tr>
                    <tr class="border-b border-[#24221f] hover:bg-[#1a1815]/60 transition">
                        <td class="px-2 sm:px-4 py-2 sm:py-3 text-stone-400">LinkedIn</td>
                        <td class="px-2 sm:px-4 py-2 sm:py-3">
                        <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="_blank"
                            class="inline-flex items-center gap-1 underline underline-offset-2 text-sky-300 hover:text-sky-200 break-all sm:break-normal">
                            https://www.linkedin.com/in/trung-dong-le-6a66ba291/
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M7 17L17 7" stroke-width="1.5"/>
                            <path d="M8 7h9v9" stroke-width="1.5"/>
                            </svg>
                        </a>
                        </td>
                    </tr>
                    <tr class="hover:bg-[#1a1815]/60 transition">
                        <td class="px-2 sm:px-4 py-2 sm:py-3 text-stone-400">Instagram</td>
                        <td class="px-2 sm:px-4 py-2 sm:py-3">
                        <a href="https://www.instagram.com/im_dgon/" target="_blank"
                            class="inline-flex items-center gap-1 underline underline-offset-2 text-sky-300 hover:text-sky-200 break-all sm:break-normal">
                            https://www.instagram.com/im_dgon/
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M7 17L17 7" stroke-width="1.5"/>
                            <path d="M8 7h9v9" stroke-width="1.5"/>
                            </svg>
                        </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </section>
        </div>
    </div>

  </div>
</template>

<style scoped>
/* .bg-dark-dots {
  background-color: #161513;
  background-image: radial-gradient(#2a2927 1px, transparent 1px);
  background-size: 24px 24px;
} */
.bg-light-dots {
  background-color: #fdfdfd;
  background-image: radial-gradient(#cccccc 1px, transparent 1px);
  background-size: 24px 24px;
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