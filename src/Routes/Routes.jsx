import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import CreateProduct from "../Pages/CreateProduct/CreateProduct";
import OrderTable from "../Pages/OrderTable/OrderTable";
import UserOrderTable from "../Pages/UserOrderTable/UserOrderTable";
import AllUsers from "../Pages/AllUsers/AllUsers";
import CreateUsers from "../Pages/CreateUsers/CreateUsers";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile/UserProfile";



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
        path: '/user-order-table',
        element: <UserOrderTable></UserOrderTable>
      },
      {
        path: '/all-users',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/order-table',
        element: <OrderTable></OrderTable>
      },
      {
        path: '/create-product',
        element: <CreateProduct></CreateProduct>
      },
      {
        path: '/create-users',
        element: <CreateUsers></CreateUsers>
      },
      {
        path: '/user-profile',
        element: <UserProfile></UserProfile>
      },
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);


export default router;