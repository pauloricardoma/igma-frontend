export interface ImageProps {
  src: string;
  alt: string;
}

export type DirectionInfinite = 'ht' | 'vt';

export interface InfiniteAutoColumnProps {
  images: ImageProps[];
  direction: DirectionInfinite;
  speed: number;
  columnWidth: number;
  columnHeight: number;
  imageWidth: number;
  imageHeight: number;
  imageSpacing: number;
}

export interface UseInfiniteAutoColumnProps {
  images: ImageProps[];
  direction: DirectionInfinite;
  speed: number;
  columnWidth: number;
  columnHeight: number;
  imageWidth: number;
  imageHeight: number;
  imageSpacing: number;
}
