<script setup lang="ts">
import Loading from '@/components/loading/Loading.vue';
import ApiError from '@/components/api-error/ApiError.vue';
import { useLoadShow } from './useLoadShow';
import ShowInfo from './show-info/ShowInfo.vue';
import Card from '@/components/card/Card.vue';
import ShowTitle from './show-title/ShowTitle.vue';
import Carousel from '@/components/carousel/ItemsCarousel.vue';
import Image from '@/components/image/Image.vue';
import ShowSeason from './show-seasons/ShowSeason.vue';
import EmptyLine from '@/components/empty-line/EmptyLine.vue';

const { show, isShowLoading, apiError, actors, showInfo, seasons } = useLoadShow();
</script>

<template>
  <div class="my-8 animate-fade-in flex flex-col gap-4">
    <Loading v-if="isShowLoading" class="self-center" />

    <ApiError v-if="apiError" :message="apiError?.message" />

    <div v-if="show" class="flex md:flex-row flex-col gap-4 bg-card p-4 rounded-md">
      <Image :image="show.image" :name="show.name" :isMedium="false" />
      <div class="flex-1 flex flex-col gap-4">
        <ShowTitle :title="show.name" :genres="show.genres" :rating="show.rating.average" />
        <ShowInfo :info="showInfo" />
        <Card v-if="actors.length > 0" name="Actors" :data="actors.join(', ')" />
        <Card v-if="show.summary" name="Summary">
          <div v-html="show.summary" class="text-justify" />
        </Card>
      </div>
    </div>

    <EmptyLine v-if="!isShowLoading && !show"> No show found </EmptyLine>

    <div v-if="show && seasons && seasons.length > 1" class="bg-card p-4 rounded-sm">
      <h2 class="text-2xl font-bold mb-2 text-center">Seasons</h2>
      <Carousel :items="seasons" v-slot="slotProps">
        <ShowSeason :season="slotProps.item" />
      </Carousel>
    </div>
  </div>
</template>
