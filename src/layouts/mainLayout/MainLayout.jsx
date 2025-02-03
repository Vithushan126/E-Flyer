import React, { useEffect } from "react";
import Footer from "../../components/common/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
