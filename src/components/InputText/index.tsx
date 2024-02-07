import { InputHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./inputText.module.css";

interface InputTextProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
}

export default function InputText(props: InputTextProps) {

  return (
    <div className={styles.inputContainer}>
      <input
        {...props}
        className={`
          ${styles.inputText}
          ${props.error ? styles.inputTextError : ''}
        `}
      />
      {!!props.error && (
        <div className={styles.errorText}>{props.error}</div>
      )}
    </div>
  )
}
