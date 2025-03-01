<script
  setup
  lang="ts"
  generic="
    T extends {
      image: Image | null;
    }
  "
>
import type { Image } from '@/types/image-type';
import { ref, computed, useTemplateRef, watch } from 'vue';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline';
import { useResizeObserver } from '@vueuse/core';
import EmptyLine from '../empty-line/EmptyLine.vue';
import CarouselButton from './CarouselButton.vue';

const props = defineProps<{ items: T[] }>();
const currentIndex = ref(0);
const visibleSlides = ref(3);
const LIST_ITEM_SLIDE_WIDTH = 220;
const SLIDE_GAP = 16;
const CONTROL_WIDTH = 40;

const totalSlides = computed(() => {
  return props.items.length;
});

const showControls = computed(() => totalSlides.value > visibleSlides.value);

const isSingleSlideCarousel = computed(() => visibleSlides.value === 1);

const maxIndex = computed(() =>
  isSingleSlideCarousel.value ? totalSlides.value : Math.max(0, totalSlides.value - visibleSlides.value),
);

const onNext = () => {
  currentIndex.value = currentIndex.value + 1 < maxIndex.value ? currentIndex.value + 1 : 0;
};

const onPrev = () => {
  currentIndex.value = currentIndex.value - 1 < 0 ? maxIndex.value - 1 : currentIndex.value - 1;
};

const slideStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * (100 / visibleSlides.value)}%)`,
  gap: isSingleSlideCarousel.value ? 0 : `${SLIDE_GAP}px`,
}));

const container = useTemplateRef('container');

useResizeObserver(container, (entries) => {
  const entry = entries[0];
  const { width: containerWidth } = entry.contentRect;
  const usefullWidth = showControls.value ? containerWidth - CONTROL_WIDTH * 2 : containerWidth;
  visibleSlides.value = Math.floor(usefullWidth / (LIST_ITEM_SLIDE_WIDTH + SLIDE_GAP)) || 1;
  currentIndex.value = 0;
});

watch(
  () => props.items,
  () => {
    currentIndex.value = 0;
  },
);
</script>

<template>
  <div class="flex justify-center items-center gap-2" ref="container">
    <CarouselButton v-if="showControls" @click="onPrev">
      <ArrowLeftIcon class="size-6 text-primary" />
    </CarouselButton>

    <div v-if="items.length > 0" class="flex-1 overflow-hidden" :class="{ 'max-w-slide-width': isSingleSlideCarousel }">
      <div class="flex items-stretch transition-transform duration-500 ease-in-out" :style="slideStyle">
        <div v-for="(item, index) in items" :key="index" class="shrink-0 flex flex-col">
          <slot :item="item" :index="index + 1"></slot>
        </div>
      </div>
    </div>

    <EmptyLine v-else> No items found </EmptyLine>

    <CarouselButton v-if="showControls" @click="onNext">
      <ArrowRightIcon class="size-6 text-primary" />
    </CarouselButton>
  </div>
</template>
