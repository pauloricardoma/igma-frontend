'use client'

import useAuth, { TOKEN_KEY } from "@/hooks/useAuth";
import Image from "next/image";
import CircularButton from "../CircularButton";
import styles from "./header.module.css";

const logoHeader = "/assets/images/LogoHeader.svg";
const iconUser = "/assets/images/icon-user.svg";
const avatar = "/assets/images/avatar.png";

export default function Header() {
  const { isLogged, login, logout } = useAuth();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerFixedContainer}>
        <div className={styles.headerLogoContainer}>
          <Image
            src={logoHeader}
            alt="Logo"
            width={120}
            height={42}
            className={styles.headerLogoImage}
          />
        </div>
        <div className={styles.headerContent}>
          <CircularButton onClick={isLogged ? logout : login}>
            {!isLogged && (
              <Image
                src={iconUser}
                alt="Logo"
                width={28}
                height={28}
                className={styles.headerIconAvatar}
              />
            )}
            {!!isLogged && (
              <Image
                src={avatar}
                alt="Logo"
                width={40}
                height={40}
                className={styles.headerAvatar}
              />
            )}
          </CircularButton>
        </div>
      </div>
    </header>
  )
}
