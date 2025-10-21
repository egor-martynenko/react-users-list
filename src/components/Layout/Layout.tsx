import { Outlet} from 'react-router-dom';
import styles from './Layout.module.css';
import {Breadcrumbs} from "../Breadcrumbs/Breadcrumbs.tsx";

export const Layout = () => {

  return (
    <div className={styles.layout}>
      <Breadcrumbs/>
      <Outlet />
    </div>
  );
};
