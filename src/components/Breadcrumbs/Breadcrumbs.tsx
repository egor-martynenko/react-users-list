import styles from './Breadcrumbs.module.css'
export const Breadcrumbs = () => {
  return (
    <ul className={styles.breadcrumbs}>
      <li>Данные</li>
      <li>Пользователи</li>
    </ul>
  );
};