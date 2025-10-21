import {UserController} from "../../components/UserController/UserController.tsx";
import {UsersList} from "../../components/UsersList/UsersList.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";

export const Users = () => {
  return (
    <div>
      <h2>Пользователи</h2>
      <UserController/>
      <UsersList />
      <Footer/>
    </div>
  );
};