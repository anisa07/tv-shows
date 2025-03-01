<script setup lang="ts">
import type { Show } from '@/types/show-type';
import ShowListItem from '../show-list-item/ShowListItem.vue';
import EmptyLine from '@/components/empty-line/EmptyLine.vue';

defineProps<{ showList: Show[] }>();
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,_minmax(var(--spacing-slide-width),_1fr))] gap-4 md:justify-items-start justify-items-center"
  >
    <ShowListItem v-for="show in showList" :key="show.id" :show="show" />

    <EmptyLine v-if="showList.length === 0">No shows found</EmptyLine>
  </div>
</template>
