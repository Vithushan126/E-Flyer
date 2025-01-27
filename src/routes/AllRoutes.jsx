import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TopCityPackage from "../pages/TopCityPackage/TopCityPackage";
import HolidayPlanner_1 from "../pages/holidayPlanner/HolidayPlanner_1";
import HolidayPlanner_2 from "../pages/holidayPlanner/HolidayPlanner_2";
import HolidayPlanner_3 from "../pages/holidayPlanner/HolidayPlanner_3";
import HolidayPlanner_4 from "../pages/holidayPlanner/HolidayPlanner_4";
import HolidayPlanner_5 from "../pages/holidayPlanner/HolidayPlanner_5";
import HolidayPlanner_6 from "../pages/holidayPlanner/HolidayPlanner_6";
import HolidayPlanner_7 from "../pages/holidayPlanner/HolidayPlanner_7";
import HolidayPlanner_8 from "../pages/holidayPlanner/HolidayPlanner_8";
import BeachHoliday from "../pages/home/BeachHoliday";
import HillCamping from "../pages/home/HillCamping";
import SunnyHoliday from "../pages/home/SunnyHoliday";
import TrendingPackage from "../pages/trendingadventure/TrendingPackage";
const MainLayout = React.lazy(() => import("../layouts/mainLayout/MainLayout"));
const NotFound = React.lazy(() =>
  import("../components/common/notFound/NotFound")
);
const Login = React.lazy(() => import("../pages/auth/login/Login"));
const Register = React.lazy(() => import("../pages/auth/register/Register"));

const Home = React.lazy(() => import("../pages/home/Home"));
const Explore = React.lazy(() => import("../pages/explore/Explore"));
const Book = React.lazy(() => import("../pages/book/Book"));
const Offers = React.lazy(() => import("../pages/offers/Offers"));
const Destinations = React.lazy(() =>
  import("../pages/destinations/Destinations")
);
const Packages = React.lazy(() => import("../pages/packages/Packages"));
const Adventure = React.lazy(() => import("../pages/adventure/Adventure"));
const CupleAdventure = React.lazy(() =>
  import("../pages/adventure/cupleAdventure/CupleAdventure")
);
const FamilyAdventure = React.lazy(() =>
  import("../pages/adventure/familyAdventure/FamilyAdventure")
);
const SeaniorAdventure = React.lazy(() =>
  import("../pages/adventure/seaniorAdventure/SeaniorAdventure")
);
const SoloAdventure = React.lazy(() =>
  import("../pages/adventure/soloAdventure/SoloAdventure")
);
const YungAdultAdventure = React.lazy(() =>
  import("../pages/adventure/youngAdultAdventure/YungAdultAdventure")
);

const HotelAndFlightView = React.lazy(() =>
  import("../pages/view/HotelAndFlightView")
);

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
        path: "offer",
        element: <Offers />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "trendingpackage",
        element: <TrendingPackage />,
      },
      {
        path: "topcitypackage",
        element: <TopCityPackage />,
      },
      {
        path: "HotelAndFlightView",
        element: <HotelAndFlightView />,
      },
      {
        path: "beachholiday",
        element: <BeachHoliday />,
      },
      {
        path: "hillcamping",
        element: <HillCamping />,
      },
      {
        path: "sunnyholiday",
        element: <SunnyHoliday />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "holidayPlanner_1",
        element: <HolidayPlanner_1 />,
      },
      {
        path: "holidayPlanner_2",
        element: <HolidayPlanner_2 />,
      }, 
      {
        path: "holidayPlanner_3",
        element: <HolidayPlanner_3 />,
      },
      {
        path: "holidayPlanner_4",
        element: <HolidayPlanner_4 />,
      }, 
      {
        path: "holidayPlanner_5",
        element: <HolidayPlanner_5 />,
      }, 
      {
        path: "holidayPlanner_6",
        element: <HolidayPlanner_6 />,
      }, 
      {
        path: "holidayPlanner_7",
        element: <HolidayPlanner_7 />,
      }, 
      {
        path: "holidayPlanner_8",
        element: <HolidayPlanner_8 />,
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
        path: "hotelAndFlightViews",
        element: <HotelAndFlightView />,
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