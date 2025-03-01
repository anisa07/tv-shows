import { vi } from 'vitest';
import { ref } from 'vue';

export const mockFetch = <T>(data: T) => ({
  get: vi.fn().mockReturnThis(),
  json: vi.fn().mockReturnValue({
    data: ref(data),
    error: ref(null),
    isFetching: ref(false),
  }),
});
