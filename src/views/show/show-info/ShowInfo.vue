<script setup lang="ts">
import type { ShowInfoType } from '@/types/show-type';

defineProps<{
  info: ShowInfoType[];
}>();
</script>

<template>
  <div class="flex flex-col">
    <div v-for="item in info" :key="item.name" class="flex gap-1">
      <span class="font-bold">{{ item.name }}:</span>
      <span>{{ item.value }}</span>
    </div>
  </div>
</template>
