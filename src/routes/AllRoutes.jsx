import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const WatchList = React.lazy(() => import("../pages/watchlist/Watchlist"));
const Contact = React.lazy(() => import("../pages/contact/Contact"));
const RoundTrip = React.lazy(() => import("../pages/tour/RoundTrip"));
const TopCityPackage = React.lazy(() =>
  import("../pages/TopCityPackage/TopCityPackage")
);
const HolidayPlanner_1 = React.lazy(() =>
  import("../pages/holidayPlanner/HolidayPlanner_1")
);
const HolidayPlanner_2 = React.lazy(() =>
  import("../pages/holidayPlanner/HolidayPlanner_2")
);
const HolidayPlanner_3 = React.lazy(() =>
  import("../pages/holidayPlanner/HolidayPlanner_3")
);
const HolidayPlanner_4 = React.lazy(() =>
  import("../pages/holidayPlanner/HolidayPlanner_4")
);
const HolidayPlanner_5 = React.lazy(() =>
  import("../pages/holidayPlanner/HolidayPlanner_5")
);
const HolidayPlanner_6 = React.lazy(() =>
  import("../pages/holidayPlanner/HolidayPlanner_6")
);
const HolidayPlanner_7 = React.lazy(() =>
  import("../pages/holidayPlanner/HolidayPlanner_7")
);
const HolidayPlanner_8 = React.lazy(() =>
  import("../pages/holidayPlanner/HolidayPlanner_8")
);
const BeachHoliday = React.lazy(() => import("../pages/home/BeachHoliday"));
const HillCamping = React.lazy(() => import("../pages/home/HillCamping"));
const SunnyHoliday = React.lazy(() => import("../pages/home/SunnyHoliday"));
const TrendingPackage = React.lazy(() =>
  import("../pages/trendingadventure/TrendingPackage")
);
const Tour = React.lazy(() => import("../pages/tour/Tour"));
const BookingStepper = React.lazy(() =>
  import("../pages/tours/BookingStepper")
);

const MainLayout = React.lazy(() => import("../layouts/mainLayout/MainLayout"));
const NotFound = React.lazy(() =>
  import("../components/common/notFound/NotFound")
);
const Home = React.lazy(() => import("../pages/home/Home"));
const Tours = React.lazy(() => import("../pages/tours/Tours"));
const TourPackage = React.lazy(() => import("../pages/tours/TourPackage"));
const Explore = React.lazy(() => import("../pages/explore/Explore"));
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

const SoloAdventure = React.lazy(() =>
  import("../pages/adventure/soloAdventure/SoloAdventure")
);

const HotelAndFlightView = React.lazy(() =>
  import("../pages/view/HotelAndFlightView")
);
const SeaniorAdventure = React.lazy(() =>
  import("../pages/adventure/seaniorAdventure/SeaniorAdventure")
);
const YungAdultAdventure = React.lazy(() =>
  import("../pages/adventure/youngAdultAdventure/YungAdultAdventure")
);
const PageReview = React.lazy(() => import("../pages/pageReview/PageReview"));
const FAQ = React.lazy(() => import("../pages/faq/FAQ"));
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
        path: "tours",
        element: <Tours />,
      },
      {
        path: "tourPackage",
        element: <TourPackage />,
      },
      {
        path: "bookingStepper",
        element: <BookingStepper />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "watchlist",
        element: <WatchList />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "Tour",
        element: <Tour />,
      },
      {
        path: "roundtrip",
        element: <RoundTrip />,
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
        path: "pageReview",
        element: <PageReview />,
      },
      {
        path: "faq",
        element: <FAQ />,
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
