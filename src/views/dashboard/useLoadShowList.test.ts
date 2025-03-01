import { test, expect, describe, vi, afterEach, beforeEach } from 'vitest';
import { useLoadShowList } from './useLoadShowList';
import { shows } from '@/mock-data/mock-shows';
import { refThrottled, useFetch } from '@vueuse/core';
import { mockFetch } from '@/mock-data/mock-utils';

vi.mock('@vueuse/core', async () => ({
  useFetch: vi.fn(() => ({
    ...mockFetch([]),
  })),
  refThrottled: vi.fn(() => ({
    value: '',
  })),
}));

vi.stubGlobal('window', {
  location: { href: '' },
  scrollTo: vi.fn(),
});

describe('useLoadShowList', () => {
  describe('test api /shows/page=1', () => {
    beforeEach(() => {
      vi.mocked(useFetch).mockReturnValue({
        ...mockFetch(shows),
      } as unknown as ReturnType<typeof useFetch>);
      vi.mocked(refThrottled).mockReturnValue({
        value: '',
      } as unknown as ReturnType<typeof refThrottled>);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    test('should return a list of shows with rating > 8 and genre = "Action"', async () => {
      const { showList, showListError, selectedGenre, selectedRating } = useLoadShowList();

      expect(showListError.value).toBe(null);
      expect(selectedGenre.value).toBe('Action');
      expect(selectedRating.value).toBe(8);
      expect(showList.value).toHaveLength(1);
      expect(showList.value[0].rating.average).toBeGreaterThan(8);
      expect(showList.value[0].genres).toContain('Action');
    });

    test('should return a list ordered by rating', () => {
      const { showList, selectedGenre, selectedRating } = useLoadShowList();

      selectedGenre.value = 'Drama';
      selectedRating.value = 5;

      expect(showList.value).toHaveLength(4);
      expect(showList.value).toEqual(
        shows.filter((show) => show.genres.includes('Drama')).sort((a, b) => b.rating.average! - a.rating.average!),
      );
      expect(showList.value[0].rating.average).toBeGreaterThan(showList.value[1].rating.average!);
    });

    test('should return a list of shows with rating >= 6 and genre = "Drama"', async () => {
      const { showList, showListError, selectedGenre, selectedRating } = useLoadShowList();

      selectedGenre.value = 'Science-Fiction';
      selectedRating.value = 6;

      expect(showListError.value).toBe(null);
      expect(selectedGenre.value).toBe('Science-Fiction');
      expect(selectedRating.value).toBe(6);
      expect(showList.value).toHaveLength(2);
    });

    test('should return an empty list when shows do not have rating >= 9', () => {
      const { showList, showListError, selectedRating } = useLoadShowList();

      selectedRating.value = 9;

      expect(showListError.value).toBe(null);
      expect(selectedRating.value).toBe(9);
      expect(showList.value).toHaveLength(0);
    });

    test('should return an empty list when shows do not have genre Family', () => {
      const { showList, showListError, selectedGenre } = useLoadShowList();

      selectedGenre.value = 'Family';

      expect(showListError.value).toBe(null);
      expect(selectedGenre.value).toBe(selectedGenre.value);
      expect(showList.value).toHaveLength(0);
    });

    test('should return an empty list when data is null', () => {
      vi.mocked(useFetch).mockReturnValue({
        ...mockFetch(null),
      } as unknown as ReturnType<typeof useFetch>);
      vi.mocked(refThrottled).mockReturnValue({
        value: '',
      } as unknown as ReturnType<typeof refThrottled>);

      const { showList, showListError, genreOptions } = useLoadShowList();

      expect(showListError.value).toBe(null);
      expect(showList.value).toHaveLength(0);
      expect(genreOptions.value).toHaveLength(0);
    });
  });

  describe('test api /shows/page=2', () => {
    beforeEach(() => {
      vi.mocked(useFetch).mockReturnValue({
        ...mockFetch([shows[2]]),
      } as unknown as ReturnType<typeof useFetch>);
      vi.mocked(refThrottled).mockReturnValue({
        value: '',
      } as unknown as ReturnType<typeof refThrottled>);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    test('should return a list of shows for page = 2', async () => {
      const { showList, showListError, selectedGenre, selectedRating, currentPage } = useLoadShowList();
      selectedRating.value = 7;
      currentPage.value = 2;

      expect(showListError.value).toBe(null);
      expect(selectedGenre.value).toBe('Action');
      expect(showList.value).toHaveLength(1);
      expect(showList.value[0].rating.average).toBeGreaterThan(7);
      expect(showList.value[0].genres).toContain('Action');
      expect(currentPage.value).toBe(2);
    });
  });

  describe('test api /singlesearch/shows?q=dexter', () => {
    beforeEach(() => {
      vi.mocked(useFetch).mockReturnValue({
        ...mockFetch(shows.find((show) => show.name === 'Dexter')),
      } as unknown as ReturnType<typeof useFetch>);
      vi.mocked(refThrottled).mockReturnValue({
        value: 'dexter',
      } as unknown as ReturnType<typeof refThrottled>);
    });

    test('should return a list of shows with name "Dexter"', () => {
      const { showList, showListError } = useLoadShowList();

      expect(showListError.value).toBe(null);
      expect(showList.value).toHaveLength(1);
      expect(showList.value[0].name).toBe('Dexter');
    });
  });
});
