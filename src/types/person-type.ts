import type { Image } from './image-type';

export interface Person {
  id: number;
  name: string;
  image: Image | null;
}
