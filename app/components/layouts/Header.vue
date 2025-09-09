<script setup lang="ts">
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const colorMode = useColorMode();
const activeItem = ref<string>("Home");

const headerRef = ref<HTMLElement | null>(null);

const isDark = computed(() => colorMode.value === "dark");

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToHref = (href: string) => {
  if (!href || !href.startsWith('#')) return;
  const target = document.querySelector(href) as HTMLElement | null;
  if (!target) return;

  const headerHeight = headerRef.value?.offsetHeight ?? 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const top = Math.max(targetTop - headerHeight, 0);
  window.scrollTo({ top, behavior: 'smooth' });
};

const onClickNav = (item: { name: string; href: string }) => {
  activeItem.value = item.name;
  scrollToHref(item.href);
};
</script>

<template>
  <div
    ref="headerRef"
    :class="[
      'fixed w-full z-40 transition-all duration-300',
      isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5',
    ]"
  >
    <div class="flex items-center justify-between px-20">
      <!-- Logo -->
      <a class="text-3xl font-bold text-white flex items-center" href="#hero" @click.prevent="() => { activeItem = 'Home'; scrollToHref('#hero'); }">
        <span class="h-8 w-8 rounded-lg flex items-center justify-center bg-primary-gradient text-xs mr-3">< /></span>
        <span class="text-white">Dong<span class="text-gradient">Le</span></span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex space-x-8 items-center">
        <a
          v-for="(item, key) in navItems"
          :key="key"
          :href="item.href"
          class="hover:text-gradient !text-white transition-colors duration-300 text-lg flex flex-col items-center cursor-pointer"
          :class="[
            { '!text-white': isDark },
            { 'text-gradient': activeItem === item.name }
          ]"
          @click.prevent="onClickNav(item)"
        >
          {{ item.name }}
          <div class="w-5" v-if="activeItem === item.name">
            <img src="@/assets/images/gradient-shape.svg" class="w-5" alt="" />
          </div>
        </a>
        
        <div class="flex text-white items-center gap-3">
          <span class="font-medium leading-9 mr-3">|</span>
          <a href="https://github.com/trungdong11" target="_blank">
            <Icon  name="i-akar-icons-github-fill" class="!h-6 !w-6 text-white mt-2" />
          </a>
          <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="_blank">
            <Icon name="i-akar-icons-linkedin-box-fill" class="!h-6 !w-6 text-white mt-2" />
          </a>
        </div>
        <!-- <theme-toggle /> -->
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
        <div class="flex flex-col space-y-8 text-xl text-white">
          <a
            v-for="(item, key) in navItems"
            :key="key"
            :href="item.href"
            class="hover:text-primary transition-colors !text-white duration-300 flex flex-col items-center"
            :class="[
              { 'text-gradient': activeItem === item.name }
            ]"
            @click.prevent="
              () => {
                activeItem = item.name;
                scrollToHref(item.href);
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
