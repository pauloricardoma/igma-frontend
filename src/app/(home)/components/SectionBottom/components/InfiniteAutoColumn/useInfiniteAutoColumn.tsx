'use client'

import { useEffect, useMemo, useState } from "react";
import { UseInfiniteAutoColumnProps } from "./infiniteAutoColumn.model";

export default function useInfiniteAutoColumn({
  images,
  speed,
  direction,
  columnWidth,
  columnHeight,
  imageWidth,
  imageHeight,
  imageSpacing,
}: UseInfiniteAutoColumnProps) {
  const [offset, setOffset] = useState(0);

  const isVertical = direction === 'vt';
  const maxOffSet = useMemo(() => {
    if (isVertical) {
      return Math.floor(
        (columnHeight + imageHeight) - (imageSpacing + (images.length * 3))
      )
    }

    return Math.floor(
      (columnWidth + imageWidth) - (imageSpacing + (images.length * 3))
    )
  }, [
    isVertical,
    columnHeight,
    columnWidth,
    imageHeight,
    imageSpacing,
    imageWidth,
    images.length,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prevOffset => prevOffset === -maxOffSet ? 0 : prevOffset - 1);
    }, speed);

    return () => clearInterval(interval);
  }, [maxOffSet, speed]);

  return { isVertical, offset }
}
