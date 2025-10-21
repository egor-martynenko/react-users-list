import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Breadcrumbs.module.css';

export const Breadcrumbs = () => {
  const location = useLocation();

  const isUsersPage = location.pathname === '/users';
  const isDataPage = location.pathname === '/';

  return (
    <ul className={styles.breadcrumbs}>
      <li className={classNames({ [styles.active]: isDataPage })}>
        <Link to="/">Данные</Link>
      </li>
      <li className={classNames({ [styles.active]: isUsersPage })}>
        <Link to="/users">Пользователи</Link>
      </li>
    </ul>
  );
};