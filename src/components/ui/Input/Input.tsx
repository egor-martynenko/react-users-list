import styles from './Input.module.css'
export const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <input type='text' name='text' placeholder='Найти пользователя' />
    </div>
  );
};