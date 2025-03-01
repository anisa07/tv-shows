<script setup lang="ts">
import type { Image } from '@/types/image-type';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    image: Image | null;
    isMedium?: boolean;
    name?: string;
    hasEffect?: boolean;
  }>(),
  {
    isMedium: true,
    name: 'image',
    hasEffect: false,
  },
);

const imageUrl = computed(() => (props.isMedium ? props.image?.medium : props.image?.original));
</script>

<template>
  <img
    v-if="image && imageUrl"
    :src="imageUrl"
    :alt="name"
    loading="lazy"
    :class="{
      'transition-transform transform hover:scale-105': hasEffect,
      'w-full h-auto rounded': isMedium,
      'max-h-100 mx-auto object-cover rounded-sm': !isMedium,
    }"
  />
  <div v-else class="h-full min-w-slide-width bg-dark-back-1 rounded flex justify-center items-center px-8">
    Image not found
  </div>
</template>
