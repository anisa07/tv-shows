<script setup lang="ts">
defineProps<{
  name: string;
  data?: string;
}>();
</script>

<template>
  <div>
    <h2 class="font-bold text-lg">{{ name }}</h2>
    <slot>
      <div class="text-justify">{{ data ?? 'N/A' }}</div>
    </slot>
  </div>
</template>
