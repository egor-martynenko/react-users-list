import type {ComponentProps, FC} from "react";
import styles from './Button.module.css'

export type ButtonProps = ComponentProps<'button'>

export const Button:FC<ButtonProps> = ({children}) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};