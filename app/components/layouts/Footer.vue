<script lang="ts" setup></script>

<template>
    <div class="px-20 flex flex-col gap-4 pt-[80px] pb-[40px] bg-[#161513] w-full bg-dark-dots">
        <div class="flex justify-between">
            <div class="flex flex-col gap-2 text-stone-100">
                <h1 class="text-lg text-[#a8a29e] font-semibold">About me</h1>
                <p class="text-xs w-[70%]">I'm DongLe, a <span class="font-medium">front-end developer</span> who loves intuitive, clean and modern UI design.</p>
                <div class="flex text-white items-center gap-3 mt-4">
                    <a href="https://github.com/trungdong11" target="_blank">
                        <Icon  name="i-akar-icons-github-fill" class="!h-6 !w-6 text-white mt-2" />
                    </a>
                    <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="_blank">
                        <Icon name="i-akar-icons-linkedin-box-fill" class="!h-6 !w-6 text-white mt-2" />
                    </a>
                </div>
            </div>
            <div class="flex gap-12 text-stone-100 font-medium text-[15px]">
                <div class="flex flex-col gap-3">
                    <h2 class="text-[#a8a29e]">Work</h2>
                    <a href="" class="">Contact</a>
                    <a href="" class="">Experience</a>
                    <a href="" class="">Services</a>
                    <a href="" class="">Skills & Tools</a>
                </div>
                <div class="flex flex-col gap-3">
                    <h2 class="text-[#a8a29e]">Learn</h2>
                    <a href="" class="">Docs</a>
                    <a href="" class="">Personal Blog</a>
                    <a href="" class="">Projects</a>
                </div>
                <div class="flex flex-col gap-3">
                    <h2 class="text-[#a8a29e]">The Site</h2>
                    <a href="" class="">Design Concept</a>
                    <a href="" class="">Source Code</a>
                    <a href="" class="">Credits</a>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between text-xs font-medium text-stone-100 mt-4">
            <p>© 2025 trungdong11</p>
            <a href="https://github.com/trungdong11" class="hover:text-gradient" target="_blank">See the recent update on GitHub</a>
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
