import Image from "next/image";
import { ImageProps } from "../SectionBottom/components/InfiniteAutoColumn/infiniteAutoColumn.model";
import styles from "./sectionMid.module.css";

const imagesObjArray: ImageProps[] = [
  {
    src: '/assets/images/mrv.svg',
    alt: 'imagem mrv',
  },
  {
    src: '/assets/images/brasilprev.svg',
    alt: 'imagem brasilprev',
  },
  {
    src: '/assets/images/idb.svg',
    alt: 'imagem idb',
  },
  {
    src: '/assets/images/comgas.svg',
    alt: 'imagem comgas',
  },
  {
    src: '/assets/images/bayer.svg',
    alt: 'imagem bayer',
  },
  {
    src: '/assets/images/cvc.svg',
    alt: 'imagem cvc',
  },
  {
    src: '/assets/images/centauro.svg',
    alt: 'imagem centauro',
  },
  {
    src: '/assets/images/neoenergia.svg',
    alt: 'imagem neoenergia',
  },
  {
    src: '/assets/images/google.svg',
    alt: 'imagem google',
  },
  {
    src: '/assets/images/honda.svg',
    alt: 'imagem honda',
  },
  {
    src: '/assets/images/ambev.svg',
    alt: 'imagem ambev',
  },
  {
    src: '/assets/images/hsl.svg',
    alt: 'imagem hsl',
  },
];

export default function SectionMid() {

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <p className={`paragraphDescription ${styles.customParagraphDescription}`}>
          Expressamos mais de 20 anos de experiência criando plataformas digitais para as maiores empresas do Brasil, impactando milhões de pessoas.
        </p>
      </div>
      <div className={styles.right}>
        {imagesObjArray.map(img => (
          <Image
            key={img.alt}
            src={img.src}
            alt={img.alt}
            width={242}
            height={176}
            className={styles.imageRight}
          />
        ))}
      </div>
    </section>
  )
}
