'use client'

import InputText from "@/components/InputText";
import Button from "@/components/Button";
import InfiniteAutoColumn from "./components/InfiniteAutoColumn";
import { InfiniteColumn } from "./sectionBottom.model";
import { ImageProps } from "./components/InfiniteAutoColumn/infiniteAutoColumn.model";
import styles from "./sectionBottom.module.css";
import useWindowSize from "@/hooks/useWindowSize";
import { deskBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/windowSizeBreakpoints";
import { useMemo } from "react";

const imagesObjArray: ImageProps[] = [
  {
    src: '/assets/images/celular2.png',
    alt: 'imagem celular2',
  },
  {
    src: '/assets/images/celular5.png',
    alt: 'imagem celular5',
  },
  {
    src: '/assets/images/celular8.png',
    alt: 'imagem celular8',
  },
];

export default function SectionBottom() {
  const { width } = useWindowSize();

  const isMobile = width <= mobileBreakpoint;
  const isTablet = width <= tabletBreakpoint && width > mobileBreakpoint;
  const isDesk = width <= deskBreakpoint && width > tabletBreakpoint;

  const columnInfiniteArray = useMemo(() => {
    const columnItems: InfiniteColumn[] = [
      {
        id: 'column-1',
        images: imagesObjArray,
        direction: 'vt',
        speed: 20,
        columnHeight: 900,
        columnWidth: 213,
        imageHeight: 406,
        imageWidth: 193,
        imageSpacing: 20,
      },
      {
        id: 'column-2',
        images: imagesObjArray,
        direction: 'vt',
        speed: 8,
        columnHeight: 900,
        columnWidth: 213,
        imageHeight: 406,
        imageWidth: 193,
        imageSpacing: 20,
      },
      {
        id: 'column-3',
        images: imagesObjArray,
        direction: 'vt',
        speed: 18,
        columnHeight: 900,
        columnWidth: 213,
        imageHeight: 406,
        imageWidth: 193,
        imageSpacing: 20,
      },
      {
        id: 'column-4',
        images: imagesObjArray,
        direction: 'vt',
        speed: 12,
        columnHeight: 900,
        columnWidth: 213,
        imageHeight: 406,
        imageWidth: 193,
        imageSpacing: 20,
      },
    ];

    if (isMobile) {
      const oneColumn: InfiniteColumn = {
        ...columnItems[0],
        direction: 'ht',
        columnHeight: 238,
        columnWidth: 342,
        imageHeight: 238,
        imageWidth: 113,
        imageSpacing: 24,
      };
      return [oneColumn];
    }

    if (isTablet || isDesk) {
      for (const i in columnItems) {
        if (isTablet) {
          columnItems[i].columnHeight = 680;
          columnItems[i].columnWidth = 125;
          columnItems[i].imageHeight = 238;
          columnItems[i].imageWidth = 113;
          columnItems[i].imageSpacing = 12;
        }

        if (isDesk) {
          columnItems[i].columnHeight = 800;
          columnItems[i].columnWidth = 177;
          columnItems[i].imageHeight = 339;
          columnItems[i].imageWidth = 151;
          columnItems[i].imageSpacing = 16;
        }
      }
    }

    return columnItems;
  }, [isDesk, isMobile, isTablet]);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h4 className={`title ${styles.customTitle}`}>
          Assine nossa newsletter
        </h4>
        <p className={`paragraphDescription ${styles.customParagraphDescription}`}>
          Desenvolva-se conosco com conteúdos sobre  Tecnologia e Design a cada 15 dias.
        </p>
        <InputText
          placeholder="Nome"
          className={styles.inputName}
        />
        <InputText
          placeholder="Email"
          className={styles.inputEmail}
        />
        <Button className={styles.buttonSignature}>
          Assinar Newsletter
        </Button>
      </div>
      <div className={styles.right}>
        {columnInfiniteArray.map(column => (
          <InfiniteAutoColumn
            key={column.id}
            images={column.images}
            speed={column.speed}
            direction={column.direction}
            columnHeight={column.columnHeight}
            columnWidth={column.columnWidth}
            imageHeight={column.imageHeight}
            imageWidth={column.imageWidth}
            imageSpacing={column.imageSpacing}
          />
        ))}
      </div>
    </section>
  )
}
