<script lang="ts" setup></script>

<template>
    <div class="px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col gap-6 sm:gap-8 md:gap-4 pt-12 sm:pt-16 md:pt-20 lg:pt-[80px] pb-8 sm:pb-12 md:pb-16 lg:pb-[40px] bg-[#161513] w-full bg-dark-dots">
        <div class="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4">
            <div class="flex flex-col gap-3 sm:gap-4 md:gap-2 text-stone-100">
                <h1 class="text-base sm:text-lg text-[#a8a29e] font-semibold">About me</h1>
                <p class="text-xs sm:text-sm w-full lg:w-[70%] leading-relaxed">I'm DongLe, a <span class="font-medium">front-end developer</span> who loves intuitive, clean and modern UI design.</p>
                <div class="flex text-white items-center gap-3 mt-4">
                    <a href="https://github.com/trungdong11" target="_blank" class="hover:scale-110 transition-transform duration-300">
                        <Icon  name="i-akar-icons-github-fill" class="!h-5 !w-5 sm:!h-6 sm:!w-6 text-white mt-2" />
                    </a>
                    <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="_blank" class="hover:scale-110 transition-transform duration-300">
                        <Icon name="i-akar-icons-linkedin-box-fill" class="!h-5 !w-5 sm:!h-6 sm:!w-6 text-white mt-2" />
                    </a>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-8 sm:gap-6 md:gap-8 lg:gap-12 text-stone-100 font-medium text-sm sm:text-[15px]">
                <div class="flex flex-col gap-3">
                    <h2 class="text-[#a8a29e] text-sm sm:text-base">Work</h2>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Contact</a>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Experience</a>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Services</a>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Skills & Tools</a>
                </div>
                <div class="flex flex-col gap-3">
                    <h2 class="text-[#a8a29e] text-sm sm:text-base">Learn</h2>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Docs</a>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Personal Blog</a>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Projects</a>
                </div>
                <div class="flex flex-col gap-3">
                    <h2 class="text-[#a8a29e] text-sm sm:text-base">The Site</h2>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Design Concept</a>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Source Code</a>
                    <a href="" class="hover:text-white transition-colors duration-300 text-xs sm:text-sm">Credits</a>
                </div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-medium text-stone-100 mt-6 sm:mt-4 gap-2 sm:gap-0">
            <p>© 2025 trungdong11</p>
            <a href="https://github.com/trungdong11" class="hover:text-gradient transition-colors duration-300 break-all sm:break-normal" target="_blank">See the recent update on GitHub</a>
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
</style>
