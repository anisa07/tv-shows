<script setup lang="ts">
import type { Show } from '@/types/show-type';
import Rating from '@/components/rating/Rating.vue';
import Genre from '@/components/genre/Genre.vue';
import Image from '@/components/image/Image.vue';
import { computed } from 'vue';

const props = defineProps<{ show: Show }>();

const rating = computed(() => props.show.rating.average);
</script>

<template>
  <router-link
    :to="`/show/${show.id}`"
    class="p-2 w-slide-width bg-card rounded-sm flex flex-col h-full animate-fade-in"
  >
    <Image :image="show.image" has-effect :name="show.name" />

    <div class="flex flex-col gap-1 flex-1 mt-2">
      <Rating v-if="rating" :rating="rating" label="Rating" class="self-end" />
      <h3 class="font-bold text-lg flex-1">{{ show.name }}</h3>
      <Genre :genres="show.genres" />
    </div>
  </router-link>
</template>
