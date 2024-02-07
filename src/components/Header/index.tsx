import Image from "next/image";
import styles from "./header.module.css";

import logoHeader from "@/assets/images/LogoHeader.svg";
import avatar from "@/assets/images/avatar.png";
import CircularButton from "../CircularButton";

interface HeaderProps {
  isLogged: boolean;
}

export default function Header({ isLogged }: HeaderProps) {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogoContainer}>
        <Image src={logoHeader} alt="Logo" className={styles.headerLogoImage} />
      </div>
      <div className={styles.headerContent}>
        <CircularButton>
          {!isLogged && (
            <Image
              src={logoHeader}
              alt="Logo"
              className={styles.headerAvatar}
            />
          )}
          {isLogged && (
            <Image
              src={avatar}
              alt="Logo"
              className={styles.headerAvatar}
            />
          )}
        </CircularButton>
      </div>
    </header>
  )
}
