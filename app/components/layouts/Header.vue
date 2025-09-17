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
      isScrolled ? 'py-2 sm:py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-3 sm:py-4 md:py-5',
    ]"
  >
    <div class="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20">
      <!-- Logo -->
      <a class="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center" href="#hero" @click.prevent="() => { activeItem = 'Home'; scrollToHref('#hero'); }">
        <span class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-lg flex items-center justify-center bg-primary-gradient text-xs mr-2 sm:mr-3">< /></span>
        <span class="text-white">Dong<span class="text-gradient">Le</span></span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden lg:flex space-x-6 xl:space-x-8 items-center">
        <a
          v-for="(item, key) in navItems"
          :key="key"
          :href="item.href"
          class="hover:text-gradient !text-white transition-colors duration-300 text-base xl:text-lg flex flex-col items-center cursor-pointer"
          :class="[
            { '!text-white': isDark },
            { 'text-gradient': activeItem === item.name }
          ]"
          @click.prevent="onClickNav(item)"
        >
          {{ item.name }}
          <div class="w-4 xl:w-5" v-if="activeItem === item.name">
            <img src="@/assets/images/gradient-shape.svg" class="w-4 xl:w-5" alt="" />
          </div>
        </a>
        
        <div class="flex text-white items-center gap-2 xl:gap-3">
          <span class="font-medium leading-9 mr-2 xl:mr-3">|</span>
          <a href="https://github.com/trungdong11" target="_blank">
            <Icon  name="i-akar-icons-github-fill" class="!h-5 !w-5 xl:!h-6 xl:!w-6 text-white mt-2" />
          </a>
          <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="_blank">
            <Icon name="i-akar-icons-linkedin-box-fill" class="!h-5 !w-5 xl:!h-6 xl:!w-6 text-white mt-2" />
          </a>
        </div>
        <!-- <theme-toggle /> -->
      </div>

      <!-- Tablet nav -->
      <div class="hidden md:flex lg:hidden space-x-4 items-center">
        <a
          v-for="(item, key) in navItems.slice(0, 2)"
          :key="key"
          :href="item.href"
          class="hover:text-gradient !text-white transition-colors duration-300 text-sm flex flex-col items-center cursor-pointer"
          :class="[
            { '!text-white': isDark },
            { 'text-gradient': activeItem === item.name }
          ]"
          @click.prevent="onClickNav(item)"
        >
          {{ item.name }}
          <div class="w-4" v-if="activeItem === item.name">
            <img src="@/assets/images/gradient-shape.svg" class="w-4" alt="" />
          </div>
        </a>
        
        <div class="flex text-white items-center gap-2">
          <span class="font-medium leading-9 mr-2">|</span>
          <a href="https://github.com/trungdong11" target="_blank">
            <Icon  name="i-akar-icons-github-fill" class="!h-5 !w-5 text-white mt-2" />
          </a>
          <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="_blank">
            <Icon name="i-akar-icons-linkedin-box-fill" class="!h-5 !w-5 text-white mt-2" />
          </a>
        </div>
      </div>

      <!-- Mobile nav toggle -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden p-2 text-white z-50 relative"
        :aria-label="isMenuOpen ? 'Close Menu' : 'Open Menu'"
      >
        <div class="w-6 h-6 flex flex-col justify-center items-center">
          <span 
            :class="[
              'block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
              isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
            ]"
          ></span>
          <span 
            :class="[
              'block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            ]"
          ></span>
          <span 
            :class="[
              'block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
            ]"
          ></span>
        </div>
      </button>

      <!-- Mobile nav -->
      <div
        :class="[
          'fixed inset-0 bg-black/90 backdrop-blur-md z-99 flex flex-col items-center justify-center',
          'transition-all duration-300 md:hidden',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ]"
      >
        <div class="flex flex-col space-y-6 text-lg sm:text-xl text-white text-center">
          <a
            v-for="(item, key) in navItems"
            :key="key"
            :href="item.href"
            class="hover:text-gradient transition-colors !text-white duration-300 flex flex-col items-center py-2 px-4"
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
            <div class="w-4 mt-1" v-if="activeItem === item.name">
              <img src="@/assets/images/gradient-shape.svg" class="w-4" alt="" />
            </div>
          </a>
          
          <!-- Mobile Social Links -->
          <div class="flex text-white items-center gap-4 mt-8 pt-6 border-t border-white/20">
            <span class="text-sm text-white/70">Follow me:</span>
            <a href="https://github.com/trungdong11" target="_blank" class="hover:scale-110 transition-transform duration-300">
              <Icon name="i-akar-icons-github-fill" class="!h-6 !w-6 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/trung-dong-le-6a66ba291/" target="_blank" class="hover:scale-110 transition-transform duration-300">
              <Icon name="i-akar-icons-linkedin-box-fill" class="!h-6 !w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
