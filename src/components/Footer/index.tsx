import Image from "next/image";
import styles from "./footer.module.css";

import logoHeader from "@/assets/images/LogoHeader.svg";

interface FooterProps {
}

export default function Footer({ }: FooterProps) {

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <span className={styles.footerText}>
          Igma Delightful Digital Products Company.
        </span>
        <span className={styles.footerText}>
          © Copyright 2023
        </span>
      </div>
    </footer>
  )
}
