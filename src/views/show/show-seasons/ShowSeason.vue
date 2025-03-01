<script setup lang="ts">
import Image from '@/components/image/Image.vue';
import ShowInfo from '../show-info/ShowInfo.vue';
import type { Season } from '@/types/season-type';

defineProps<{ season: Season }>();
</script>

<template>
  <div class="flex flex-col h-full gap-2 w-slide-width">
    <Image :image="season.image" name="season-image" />
    <ShowInfo
      :info="[
        {
          name: 'Season',
          value: season.number,
        },
        {
          name: 'Premiere',
          value: season.premiereDate,
        },
      ]"
    />
  </div>
</template>
