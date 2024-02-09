'use client'

import Image from "next/image";
import { InfiniteAutoColumnProps } from "./infiniteAutoColumn.model";
import useInfiniteAutoColumn from "./useInfiniteAutoColumn";
import styles from "./infiniteAutoColumn.module.css";

export default function InfiniteAutoColumn({
  images,
  speed,
  direction,
  columnWidth,
  columnHeight,
  imageWidth,
  imageHeight,
  imageSpacing,
}: InfiniteAutoColumnProps) {
  const { isVertical, offset } = useInfiniteAutoColumn({
    images,
    speed,
    direction,
    columnWidth,
    columnHeight,
    imageWidth,
    imageHeight,
    imageSpacing,
  });

  return (
    <div
      className={isVertical
        ? styles.columnVertical
        : styles.columnHorizontal
      }
      style={{ width: columnWidth, height: columnHeight }}
    >
      <div
        className={isVertical
          ? styles.infiniteContainerVertical
          : styles.infiniteContainerHorizontal
        }
        style={{ transform: `translate${isVertical ? 'Y' : 'X'}(${offset}px)` }}
      >
        {images.map((img, index) => (
          <Image
            key={`${img.alt}-1-${index}`}
            src={img.src}
            alt={img.alt}
            width={imageWidth}
            height={imageHeight}
            className={styles.imageContainer}
            style={{
              marginTop: isVertical ? imageSpacing : undefined,
              marginLeft: isVertical ? undefined : imageSpacing,
            }}
          />
        ))}
        {images.map((img, index) => (
          <Image
            key={`${img.alt}-2-${index}`}
            src={img.src}
            alt={img.alt}
            width={imageWidth}
            height={imageHeight}
            className={styles.imageContainer}
            style={{
              marginTop: isVertical ? imageSpacing : undefined,
              marginLeft: isVertical ? undefined : imageSpacing,
            }}
          />
        ))}
        {images.map((img, index) => (
          <Image
            key={`${img.alt}-2-${index}`}
            src={img.src}
            alt={img.alt}
            width={imageWidth}
            height={imageHeight}
            className={styles.imageContainer}
            style={{
              marginTop: isVertical ? imageSpacing : undefined,
              marginLeft: isVertical ? undefined : imageSpacing,
            }}
          />
        ))}
      </div>
    </div>
  );
};
