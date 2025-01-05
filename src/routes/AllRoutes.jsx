import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CommonCard from "../components/ui/commonCard/CommonCard";
const MainLayout = React.lazy(() => import("../layouts/mainLayout/MainLayout"));
const NotFound = React.lazy(() =>
  import("../components/common/notFound/NotFound")
);
const Home = React.lazy(() => import("../pages/home/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      //   <React.Suspense fallback={<div>Loading...</div>}>
      <MainLayout />
      //   </React.Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "card",
        element: <CommonCard />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        lazy: () => import("../pages/auth/login/Login"),
      },
      {
        path: "register",
        lazy: () => import("../pages/auth/register/Register"),
      },
    ],
  },
]);
