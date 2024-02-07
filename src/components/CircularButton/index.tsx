import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./circularButton.module.css";

interface CircularButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

export default function CircularButton(props: CircularButtonProps) {

  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  )
}
