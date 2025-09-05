<script setup lang="ts">
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const colorMode = useColorMode();
const activeItem = ref<string>("Home"); // mặc định active Home

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    :class="[
      'fixed w-full z-40 transition-all duration-300',
      isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5',
    ]"
  >
    <div class="flex items-center justify-between px-40">
      <!-- Logo -->
      <a class="text-3xl font-bold text-gradient flex items-center" href="#hero">
        DongLe
        <span class="text-gradient ml-2">Portfolio</span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex space-x-8 items-center">
        <a
          v-for="(item, key) in navItems"
          :key="key"
          :href="item.href"
          class="text-foreground/80 hover:text-gradient transition-colors duration-300 text-lg flex flex-col items-center cursor-pointer"
          :class="[
            { '!text-white': colorMode.value === 'dark' },
            { 'text-gradient': activeItem === item.name }
          ]"
          @click.prevent="activeItem = item.name"
        >
          {{ item.name }}
          <div class="w-5" v-if="activeItem === item.name">
            <img src="@/assets/images/gradient-shape.svg" class="w-5" alt="" />
          </div>
        </a>
        <theme-toggle />
      </div>

      <!-- Mobile nav toggle -->
      <!--
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden p-2 text-foreground z-50"
        :aria-label="isMenuOpen ? 'Close Menu' : 'Open Menu'"
      >
        <component :is="isMenuOpen ? X : Menu" size="24" />
      </button>
      -->

      <!-- Mobile nav -->
      <div
        :class="[
          'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
          'transition-all duration-300 md:hidden',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ]"
      >
        <div class="flex flex-col space-y-8 text-xl">
          <a
            v-for="(item, key) in navItems"
            :key="key"
            :href="item.href"
            class="hover:text-primary transition-colors duration-300 flex flex-col items-center"
            :class="[
              { '!text-white': colorMode.value === 'dark' },
              { 'text-gradient': activeItem === item.name }
            ]"
            @click.prevent="
              () => {
                activeItem = item.name;
                isMenuOpen = false;
              }
            "
          >
            {{ item.name }}
            <div class="w-5 mt-1" v-if="activeItem === item.name">
              <img src="@/assets/images/gradient-shape.svg" class="w-5" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
