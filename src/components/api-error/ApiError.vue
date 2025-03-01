<script setup lang="ts">
defineProps<{ message?: string }>();
</script>

<template>
  <div class="bg-red-100 text-red-600 p-4 rounded-lg shadow-sm animate-fade-in">
    <slot>
      <p>{{ message ?? 'Something went wrong loading resource' }}</p>
    </slot>
  </div>
</template>
