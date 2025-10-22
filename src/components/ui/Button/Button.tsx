import type {ComponentProps, FC} from "react";
import styles from './Button.module.css'
import classNames from "classnames";

type ButtonProps = ComponentProps<'button'> & {
  isPrimary?: boolean;
  vsIcon?: boolean;
}

export const Button:FC<ButtonProps> = ({children, isPrimary, vsIcon}) => {
  return (
    <button className={classNames(styles.button, {
      [styles.primary]: isPrimary,
      [styles.vsIcon]: vsIcon
    })} >
      {children}
    </button>
  );
};