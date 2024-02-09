'use client'

import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import {
  deskBreakpoint,
  mobileBreakpoint,
  tabletBreakpoint,
} from "@/utils/windowSizeBreakpoints";
import styles from "./sectionTop.module.css";
import { useMemo } from "react";

const image1 = "/assets/images/Image.png"
const image2 = "/assets/images/Image@2x.png"
const image3 = "/assets/images/Image@3x.png"
const vactorHero = "/assets/images/vectorHero.svg"
const logoIgma = "/assets/images/logotipoIgma.svg"

export default function SectionTop() {
  const { width } = useWindowSize();

  const isMobile = width <= mobileBreakpoint;
  const isTablet = width <= tabletBreakpoint && width > mobileBreakpoint;
  const isDesk = width <= deskBreakpoint && width > tabletBreakpoint;
  const src = useMemo(() => {
    if (isMobile || isTablet) {
      return image1;
    }
    if (isDesk) {
      return image2;
    }

    return image3;
  }, [isDesk, isMobile, isTablet])

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <Image
          src={src}
          alt="Image de vulcão em erupção"
          width={304}
          height={504}
          className={styles.imageLeft}
        />
        <Image
          src={vactorHero}
          alt="Vector sob image"
          width={60}
          height={157}
          className={styles.vectorImageLeft}
        />
      </div>
      <div className={styles.right}>
        <h4 className={`title ${styles.customTitle}`}>
          Prazer, somos
          <Image
            src={logoIgma}
            alt="Igma logo"
            width={73}
            height={30}
            className={styles.imageTitle}
          />
        </h4>
        <p className={`paragraph ${styles.customParagraph}`}>
          Acreditamos em um mundo onde experiências incríveis são essenciais.
        </p>
        <p className={`paragraphDescription ${styles.customParagraphDescription}`}>
          Unimos design e tecnologia para resolver problemas complexos de empresas. Criamos produtos digitais que revolucionam o relacionamento entre empresas e consumidores.
        </p>
      </div>
    </section>
  )
}
