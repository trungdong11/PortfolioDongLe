<script setup lang="ts">
interface Star {
  id: number
  size: number
  x: number
  y: number
  opacity: number
  animationDuration: number
}

interface Meteor {
  id: number
  size: number
  x: number
  y: number
  delay: number
  animationDuration: number
}

const stars = ref<Star[]>([])
const meteors = ref<Meteor[]>([])
const colorMode = useColorMode()

const generateStars = () => {
  const numberOfStars = Math.floor(
    (window.innerWidth * window.innerHeight) / 10000
  )

  const newStars: Star[] = []
  for (let i = 0; i < numberOfStars; i++) {
    newStars.push({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2
    })
  }
  stars.value = newStars
}

const generateMeteors = () => {
  const numberOfMeteors = 4
  const newMeteors: Meteor[] = []
  for (let i = 0; i < numberOfMeteors; i++) {
    newMeteors.push({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3
    })
  }
  meteors.value = newMeteors
}

onMounted(() => {
  generateStars()
  generateMeteors()

  window.addEventListener('resize', generateStars)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', generateStars)
})
</script>

<template>
  <div
    v-if="colorMode.value === 'dark'"
    class="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-black"
  >
    <div
      v-for="star in stars"
      :key="star.id"
      class="star animate-pulse-subtle"
      :style="{
        width: star.size + 'px',
        height: star.size + 'px',
        left: star.x + '%',
        top: star.y + '%',
        opacity: star.opacity,
        animationDuration: star.animationDuration + 's'
      }"
    />

    <div
      v-for="meteor in meteors"
      :key="meteor.id"
      class="meteor animate-meteor"
      :style="{
        width: meteor.size * 50 + 'px',
        height: meteor.size * 2 + 'px',
        left: meteor.x + '%',
        top: meteor.y + '%',
        animationDelay: meteor.delay + 's',
        animationDuration: meteor.animationDuration + 's'
      }"
    />
  </div>
</template>

<style scoped>
.star {
  position: absolute;
  background: white;
  border-radius: 50%;
}

.meteor {
  position: absolute;
  background: linear-gradient(90deg, white, transparent);
  border-radius: 9999px;
}
</style>
