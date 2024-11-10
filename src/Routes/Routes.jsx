import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UserTable from "../Pages/UserTable/UserTable";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><MainLayout></MainLayout></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/user-table',
        element: <UserTable></UserTable>
      },
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);


export default router;