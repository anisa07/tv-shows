<script lang="ts" setup>
import type { GenreType } from '@/types/genre-type';

defineProps<{ genres: GenreType[] }>();
</script>

<template>
  <div class="flex gap-1 flex-wrap text-sm text-gray-label">
    {{ genres.join(', ') }}
  </div>
</template>
