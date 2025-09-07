<template>
    <canvas ref="canvas" class="absolute top-0 left-0 w-full h-full"></canvas>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    from: { nodeRef: HTMLElement | null };
    to: { nodeRef: HTMLElement | null };
  }>();
  
  const canvas = ref<HTMLCanvasElement | null>(null);
  
  const drawLine = () => {
    if (!canvas.value || !props.from?.nodeRef || !props.to?.nodeRef) return;
  
    const ctx = canvas.value.getContext("2d");
    if (!ctx) return;
  
    const rect = canvas.value.getBoundingClientRect();
    canvas.value.width = rect.width;
    canvas.value.height = rect.height;
  
    const parentRect = canvas.value.parentElement!.getBoundingClientRect();
  
    const a = props.from.nodeRef.getBoundingClientRect();
    const b = props.to.nodeRef.getBoundingClientRect();
  
    const x1 = a.left - parentRect.left + a.width; //FlowNode
    const y1 = a.top - parentRect.top + a.height / 2;
  
    const x2 = b.left - parentRect.left; // RightNode
    const y2 = b.top - parentRect.top + b.height / 2;
  
    ctx.clearRect(0, 0, rect.width, rect.height);
  
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(x1 + 100, y1, x2 - 100, y2, x2, y2);
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 2.5;
    ctx.stroke();
  
    ctx.beginPath();
    ctx.arc(x2, y2, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#94a3b8";
    ctx.fill();
  };
  
  onMounted(async () => {
    await nextTick();
    drawLine();
    window.addEventListener("resize", drawLine);
  });
  
  watch(() => [props.from, props.to], () => {
    nextTick(() => drawLine());
  });
  </script>
  