import './App.css'
import {Breadcrumbs} from "./components/Breadcrumbs/Breadcrumbs.tsx";

import {UsersList} from "./components/UsersList/UsersList.tsx";
import {UserController} from "./components/UserController/UserController.tsx";
import {Footer} from "./components/Footer/Footer.tsx";

function App() {

  return (
    <>
      <Breadcrumbs/>
      <h2>Пользователи</h2>
      <UserController/>
      <UsersList />
      <Footer/>
    </>
  )
}

export default App
