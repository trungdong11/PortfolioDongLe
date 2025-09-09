<script lang="ts" setup>
const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
    <div class="flex flex-col gap-4 justify-center items-center py-[80px]">
        <div class="">
            <img src="@/assets/images/avatar.png" class="h-[240px] w-[240px] rounded-full object-cover" alt="" />
        </div>
        <div class="intro w-[65%] font-bold  leading-[68px] text-center">
            <p class="text-white text-[60px]">Hi! I'm <span class="text-gradient">DongLe</span>,</p>
            <p class="text-white text-[48px]">frontend developer based in VietNam.</p>
        </div>
        <p class="text-white w-[50%] font-medium text-center">I am a frontend developer from DaNang, VietNam with 3 years of experience in multiple companies, where I have worked on real-world projects and focused on creating seamless, user-friendly experiences.</p>
        <div class="btn flex items-center gap-8 mt-4">
            <button @click="scrollToContact" class="min-w-[200px] px-[30px] py-[18px] rounded-full cursor-pointer font-medium text-lg text-white bg-primary-gradient">
                Connect with me
            </button>
            <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="blank" class="min-w-[200px] text-center px-[30px] py-[18px] rounded-full cursor-pointer font-medium text-lg border-2 border-white text-gradient">About me</a>
        </div>
    </div>
</template>