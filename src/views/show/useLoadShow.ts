import { SHOW_API_URL } from '@/config/api-config';
import type { Cast } from '@/types/cast-type';
import type { Season } from '@/types/season-type';
import type { Show, ShowInfoType } from '@/types/show-type';
import { useFetch } from '@vueuse/core';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const FIRST_ACTORS = 10;

export const useLoadShow = () => {
  const route = useRoute();

  const showListUrl = `${SHOW_API_URL}/${route.params.id}`;
  const seasonListUrl = `${SHOW_API_URL}/${route.params.id}/seasons`;
  const castListUrl = `${SHOW_API_URL}/${route.params.id}/cast`;

  const { data: show, error: showError, isFetching: isShowLoading } = useFetch(showListUrl).get().json<Show>();

  const {
    data: seasons,
    error: seasonsError,
    isFetching: isSeasonsLoading,
  } = useFetch(seasonListUrl).get().json<Season[]>();

  const { data: casts, error: castError, isFetching: isCastLoading } = useFetch(castListUrl).get().json<Cast[]>();

  const actors = computed(() =>
    casts.value ? casts.value?.map((cast) => cast.person.name).slice(0, FIRST_ACTORS) : [],
  );

  const showInfo = computed(() => {
    const info: ShowInfoType[] = [];

    if (!show.value) return info;

    info.push({
      name: 'Premiered',
      value: show.value.premiered,
    });
    info.push({
      name: 'Status',
      value: show.value.status,
    });
    info.push({
      name: 'Seasons',
      value: seasons.value?.length ?? null,
    });

    return info.filter((item) => !!item.value);
  });

  const apiError = computed(() => showError.value || seasonsError.value || castError.value);

  return {
    show,
    actors,
    isShowLoading,
    isSeasonsLoading,
    isCastLoading,
    seasons,
    showInfo,
    apiError,
  };
};
