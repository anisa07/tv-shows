import type { Rating } from './rating-type';
import type { Image } from './image-type';
import type { Status } from './status-type';
import type { GenreType } from './genre-type';

export interface Show {
  id: number;
  url: string;
  name: string;
  genres: GenreType[];
  rating: Rating;
  image: Image | null;
  summary: string;
  status: Status;
  premiered: string;
  ended: string | null;
}

export interface ShowInfoType {
  name: string;
  value: string | number | null;
}
