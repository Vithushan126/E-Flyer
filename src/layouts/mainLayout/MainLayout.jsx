import React from "react";
import Footer from "../../components/common/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Feedback from "../../components/common/feedback/Feedback";
import Explore from "../../components/common/explore/Explore";
import TravelCategory from "../../components/common/travelcategory/TravelCategory";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <TravelCategory/>
      <Explore/>
      <Feedback/>
      <Footer />
    </>
  );
};

export default MainLayout;
