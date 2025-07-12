import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import ErrorPage from "../Components/ErrorPage";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import Kids from "../Components/Kids";

import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/TrendingApp.json"),
      },
    ],
  },

  {
    path: "/kids",
    element: <Kids></Kids>,
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
