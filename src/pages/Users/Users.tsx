import styles from './Users.module.css'
import {UserController} from "../../components/UserController/UserController.tsx";
import {UsersList} from "../../components/UsersList/UsersList.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";

export const Users = () => {
  return (
    <>
      <h2 className={styles.sectionTitle}>Пользователи</h2>
      <UserController/>
      <UsersList />
      <Footer/>
    </>
  );
};