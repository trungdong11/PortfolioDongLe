export const useScrollAnimation = () => {
  const isVisible = ref(false)
  const elementRef = ref<HTMLElement | null>(null)

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  onMounted(() => {
    if (elementRef.value) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      observer.observe(elementRef.value)
    }
  })

  return {
    isVisible: readonly(isVisible),
    elementRef
  }
}
