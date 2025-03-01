import { computed, nextTick, ref, watch } from 'vue';
import { API_URL, SHOW_API_URL } from '@/config/api-config';
import { useFetch, refThrottled } from '@vueuse/core';
import { useRoute, type LocationQueryValue } from 'vue-router';
import type { GenreType } from '@/types/genre-type';
import type { Show } from '@/types/show-type';

const parseCurrentPage = (page?: LocationQueryValue[] | LocationQueryValue) =>
  page && !Array.isArray(page) ? parseInt(page, 10) : 1;

export const useLoadShowList = () => {
  const route = useRoute();
  const selectedGenre = ref<GenreType>('Action');
  const selectedRating = ref<number>(8);
  const ratingOptions = ref<number[]>([5, 6, 7, 8]);
  const pageOptions = ref<number[]>([1, 2, 3, 4, 5]);
  const genreOptions = ref<GenreType[]>([]);
  const showSearchInput = ref('');
  const throttledSearch = refThrottled(showSearchInput, 1000);

  const currentPage = computed(() => parseCurrentPage(route.query.page));

  const showListUrl = computed(() =>
    throttledSearch.value
      ? `${API_URL}/singlesearch/shows?q=${throttledSearch.value}`
      : `${SHOW_API_URL}?page=${currentPage.value}`,
  );

  const { data, error, isFetching } = useFetch(showListUrl, { refetch: true }).get().json<Show[]>();

  watch(currentPage, async () => {
    await nextTick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  watch(data, () => {
    if (data.value && !throttledSearch.value) {
      genreOptions.value = Array.from(
        new Set(data.value.reduce((result: GenreType[], show) => [...result, ...show.genres], [])),
      );
    }
  });

  const showList = computed(() => {
    if (!data.value) return [];

    if (data.value && !Array.isArray(data.value)) return [data.value];

    let list = [...data.value].filter((show) => show.image && show.rating.average);

    list = selectedGenre.value ? list.filter((show) => show.genres.includes(selectedGenre.value!)) : list;
    list = selectedRating.value ? list.filter((show) => show.rating.average! >= selectedRating.value!) : list;

    return list.sort((showA, showB) => (showB.rating.average ?? 0) - (showA.rating.average ?? 0));
  });

  return {
    showList,
    isShowListLoading: isFetching,
    showListError: error,
    showSearchInput,
    genreOptions,
    selectedGenre,
    selectedRating,
    ratingOptions,
    currentPage,
    pageOptions,
  };
};
