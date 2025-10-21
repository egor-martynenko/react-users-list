import { createBrowserRouter } from 'react-router-dom';
import { Users } from "./pages/Users/Users.tsx";
import { Layout } from "./components/Layout/Layout.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: 'users',
        element: <Users />,
      }
    ]
  }
]);