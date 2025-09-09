<script lang="ts" setup></script>
<template>
    <div class="pt-[80px] absolute flex flex-col justify-center items-center w-full">
        <section id="hero" class="w-full">
            <content-hero />
        </section>
        <section id="skills" class="w-full">
            <content-skill />
        </section>
        <section id="projects" class="w-full">
            <content-project />
        </section>
        <section id="contact" class="w-full">
            <content-contact />
        </section>
        <layouts-footer />
    </div>
</template>