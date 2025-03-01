import type { Image } from './image-type';

export interface Season {
  id: number;
  endDate: string;
  name: string;
  summary: string | null;
  premiereDate: string;
  image: Image | null;
  episodeOrder: number;
  number: number;
}
