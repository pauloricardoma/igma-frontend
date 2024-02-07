import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./button.module.css";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

export default function Button(props: ButtonProps) {

  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  )
}
