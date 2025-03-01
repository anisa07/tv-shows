<script lang="ts" setup>
import Input from '@/components/input/Input.vue';
import Select from '@/components/select/Select.vue';
import ShowListItem from './show-list-item/ShowListItem.vue';
import { useLoadShowList } from './useLoadShowList';
import ApiError from '@/components/api-error/ApiError.vue';
import Carousel from '@/components/carousel/ItemsCarousel.vue';
import ShowList from './show-list/ShowsList.vue';
import ShowsPagination from './shows-pagination/ShowsPagination.vue';
import { ref } from 'vue';
import CheckBox from '@/components/check-box/CheckBox.vue';
import Loading from '@/components/loading/Loading.vue';

const {
  selectedGenre,
  genreOptions,
  showList,
  showSearchInput,
  showListError,
  selectedRating,
  ratingOptions,
  currentPage,
  pageOptions,
  isShowListLoading,
} = useLoadShowList();

const showListAsGrid = ref(false);
</script>

<template>
  <div class="flex flex-col gap-8 mt-4 mb-8">
    <section class="flex flex-col items-center gap-2">
      <h3 class="text-xl">Select shows by</h3>
      <div class="flex items-center flex-wrap gap-4">
        <Input
          class="w-75"
          name="show-title"
          placeholder="Input show name"
          v-model:value="showSearchInput"
          label="Show title"
        />
        <Select v-model:value="selectedGenre" :options="genreOptions" label="Genre" name="genre" />
        <Select v-model:value="selectedRating" :options="ratingOptions" label="Rating above" name="rating" />
      </div>
      <div class="flex flex-wrap gap-4">
        <CheckBox class="mt-4" v-model:checked="showListAsGrid" label="Display list as grid" />
        <ShowsPagination :page="currentPage" :pageOptions="pageOptions" />
      </div>
    </section>

    <Loading v-if="isShowListLoading && !showList" class="self-center" />

    <ApiError v-if="showListError" :message="showListError?.message" />

    <template v-if="showList">
      <ShowList v-if="showListAsGrid" :show-list="showList" />
      <Carousel v-else :items="showList" v-slot="slotProps">
        <ShowListItem :show="slotProps.item" />
      </Carousel>
    </template>
  </div>
</template>
