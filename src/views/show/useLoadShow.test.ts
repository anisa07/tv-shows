import { test, describe, vi, afterEach, beforeEach, expect } from 'vitest';
import { useLoadShow } from './useLoadShow';
import { cast, seasons, shows } from '@/mock-data/mock-shows';
import { useFetch } from '@vueuse/core';
import { SHOW_API_URL } from '@/config/api-config';
import { mockFetch } from '@/mock-data/mock-utils';

vi.mock('@vueuse/core', async () => ({
  useFetch: vi.fn(() => ({
    ...mockFetch([]),
  })),
}));

vi.mock('vue-router', () => {
  return {
    useRoute: vi.fn(() => ({
      params: {
        id: '161',
      },
    })),
  };
});

describe('useLoadShow', () => {
  beforeEach(() => {
    vi.mocked(useFetch).mockImplementation((url) => {
      let returnMock = {};
      switch (url) {
        case `${SHOW_API_URL}/161`:
          returnMock = {
            ...mockFetch(shows[0]),
          };
          break;
        case `${SHOW_API_URL}/161/seasons`:
          returnMock = {
            ...mockFetch(seasons),
          };
          break;
        case `${SHOW_API_URL}/161/cast`:
          returnMock = {
            ...mockFetch(cast),
          };
          break;
      }
      return returnMock as unknown as ReturnType<typeof useFetch>;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should return show, its cast and seasons', () => {
    const { seasons, show, showInfo, apiError, actors } = useLoadShow();

    expect(show.value).toEqual(shows[0]);
    expect(showInfo.value).toEqual([
      { name: 'Premiered', value: '2006-10-01' },
      { name: 'Status', value: 'Ended' },
      { name: 'Seasons', value: 8 },
    ]);
    expect(seasons.value!).toHaveLength(8);
    expect(apiError.value).toBe(null);
    expect(actors.value).toHaveLength(6);
  });

  test('should show no error when there is show = null', () => {
    vi.mocked(useFetch).mockImplementation((url) => {
      let returnMock = {};
      switch (url) {
        case `${SHOW_API_URL}/161`:
          returnMock = {
            ...mockFetch(null),
          };
          break;
        case `${SHOW_API_URL}/161/seasons`:
          returnMock = {
            ...mockFetch(seasons),
          };
          break;
        case `${SHOW_API_URL}/161/cast`:
          returnMock = {
            ...mockFetch(cast),
          };
          break;
      }
      return returnMock as unknown as ReturnType<typeof useFetch>;
    });
    const { show, showInfo, apiError } = useLoadShow();

    expect(show.value).toBe(null);
    expect(showInfo.value).toEqual([]);
    expect(apiError.value).toBe(null);
  });
});
