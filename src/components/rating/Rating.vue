<script setup lang="ts">
defineProps<{ rating: number | string; label?: string }>();
</script>

<template>
  <div class="flex items-center text-sm gap-2">
    <span v-if="label">{{ label }}:</span>
    <span
      class="py-0.5 px-1 rounded-full text-lg min-w-[30px] text-center bg-radial from-primary from-40% to-primary-dark-shade text-primary-text"
    >
      {{ rating }}
    </span>
  </div>
</template>
