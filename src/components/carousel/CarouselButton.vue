<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
  <button @click="$emit('click')" class="bg-black/50 p-2 rounded-full">
    <slot />
  </button>
</template>
