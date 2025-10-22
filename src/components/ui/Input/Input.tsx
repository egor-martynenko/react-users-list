import styles from './Input.module.css'
import type {ComponentProps, FC} from "react";
import {SearchIcon} from "../../../assets/svg/SearchIcon.tsx";

type InputProps = ComponentProps<'input'>

export const Input:FC<InputProps> = ({placeholder}) => {
  return (
    <div className={styles.inputContainer}>
      <input type='text' name='text' placeholder={placeholder} />
      <SearchIcon/>
    </div>
  );
};