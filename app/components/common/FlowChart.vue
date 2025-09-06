<template>
    <div class="relative flex items-center justify-end mt-16">
      <!-- Flow Node left -->
      <FlowNode
        ref="source"
        title="Development Approach"
        subtitle="My comprehensive methodology for creating exceptional digital experiences"
        :items="['Clean & Intuitive Design', 'Detail Oriented', 'Pretty & Optimized']"
      />
  
      <!-- Right nodes -->
      <div class="ml-52 space-y-10">
        <RightNode ref="node1" title="Clean & Intuitive" description="Keep the UI clean with a modern touch without compromising UX" icon="i-material-symbols-palette-outline" color="bg-[#f5ba00]" />
        <RightNode ref="node2" title="Detail Oriented" description="Awareness to ease of access, UI consistency, and improved UX." icon="i-mynaui-target" color="bg-[#fa5bb0]" />
        <RightNode ref="node3" title="Pretty & Optimized" description="Writing clean code is a top priority while keeping it as optimized as possible." icon="i-material-symbols-flash-on-outline-rounded" color="bg-[#378aff]" />
      </div>
  
      <!-- Canvas Connectors -->
      <CanvasConnector :from="source" :to="node1" />
      <CanvasConnector :from="source" :to="node2" />
      <CanvasConnector :from="source" :to="node3" />
    </div>
  </template>
  
  <script setup lang="ts">
  import FlowNode from "./FlowNode.vue";
  import RightNode from "./RightNode.vue";
  import CanvasConnector from "./CanvasConnector.vue";
  
  const source = ref();
  const node1 = ref();
  const node2 = ref();
  const node3 = ref();
  </script>
  