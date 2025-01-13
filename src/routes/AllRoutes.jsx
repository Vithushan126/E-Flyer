import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Adventure from "../pages/adventure/Adventure";
import CupleAdventure from "../pages/adventure/cupleAdventure/CupleAdventure";
import FamilyAdventure from "../pages/adventure/familyAdventure/FamilyAdventure";
import SeaniorAdventure from "../pages/adventure/seaniorAdventure/SeaniorAdventure";
import SoloAdventure from "../pages/adventure/soloAdventure/SoloAdventure";
import YungAdultAdventure from "../pages/adventure/youngAdultAdventure/YungAdultAdventure";
import TopCityPackage from "../pages/TopCityPackage/TopCityPackage";
const MainLayout = React.lazy(() => import("../layouts/mainLayout/MainLayout"));
const NotFound = React.lazy(() =>
  import("../components/common/notFound/NotFound")
);
const Home = React.lazy(() => import("../pages/home/Home"));
const Explore = React.lazy(() => import("../pages/explore/Explore"));
const Book = React.lazy(() => import("../pages/book/Book"));
const Destinations = React.lazy(() =>
  import("../pages/destinations/Destinations")
);
const Packages = React.lazy(() => import("../pages/packages/Packages"));
const Login = React.lazy(() => import("../pages/auth/login/Login"));
const Register = React.lazy(() => import("../pages/auth/register/Register"));

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
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "book",
        element: <Book />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "topcitypackage",
        element: <TopCityPackage />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "adventure",
        element: <Adventure />,
      },
      {
        path: "soloAdventure",
        element: <SoloAdventure />,
      },
      {
        path: "familyAdventure",
        element: <FamilyAdventure />,
      },
      {
        path: "couplesAdventure",
        element: <CupleAdventure />,
      },
      {
        path: "seniorsAdventure",
        element: <SeaniorAdventure />,
      },
      {
        path: "youngAdultsAdventure",
        element: <YungAdultAdventure />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  // {
  //   path: "/auth",
  //   children: [
  //     {
  //       path: "login",
  //       lazy: () => import("../pages/auth/login/Login"),
  //     },
  //     {
  //       path: "register",
  //       lazy: () => import("../pages/auth/register/Register"),
  //     },
  //   ],
  // },
]);
const App = () => <RouterProvider router={router} />;