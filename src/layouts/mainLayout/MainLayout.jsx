import React from "react";
import Footer from "../../components/common/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="bg-textColor flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
