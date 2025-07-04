import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="bg-[#F8F6F0] min-h-screen ">
      <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-11/12 bg-[#F8F6F0]">
  <NavBar />
</header>

      <main className="w-11/12 mx-auto  pt-16">
        <Outlet></Outlet>
      </main>

      <footer className="bg-[#E8DBCF]">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
