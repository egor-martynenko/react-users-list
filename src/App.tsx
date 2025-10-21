import './App.css'
import {Breadcrumbs} from "./components/Breadcrumbs/Breadcrumbs.tsx";

import {UsersList} from "./components/UsersList/UsersList.tsx";
import {UserController} from "./components/UserController/UserController.tsx";

function App() {

  return (
    <>
      <Breadcrumbs/>
      <h2>Пользователи</h2>
      <UserController/>
      <UsersList />
    </>
  )
}

export default App
