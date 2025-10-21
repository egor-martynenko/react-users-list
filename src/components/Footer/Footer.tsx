import styles from './Footer.module.css'
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_links}>
        <a>Информация</a>
        <a>Пользователи</a>
        <a>Реклама</a>
        <a>Условия</a>
        <a>Политика Конфиденциальности</a>
        <a>Поддержка</a>
        <a>Клиенты</a>
        <a>Настройки Куки</a>
        <a>Главная</a>
      </div>
      <span>@test</span>
    </footer>
  );
};