<script setup lang="ts">
import Rating from '@/components/rating/Rating.vue';
import Genre from '@/components/genre/Genre.vue';
import type { GenreType } from '@/types/genre-type';

defineProps<{
  title: string;
  genres: GenreType[];
  rating?: number | null;
}>();
</script>

<template>
  <h1 class="text-center font-bold text-3xl overflow-ellipsis flex flex-col justify-center items-center relative">
    <span class="flex-1">{{ title }}</span>
    <Genre :genres="genres" />
    <Rating v-if="rating" :rating="rating" class="absolute top-0 right-0" />
  </h1>
</template>
