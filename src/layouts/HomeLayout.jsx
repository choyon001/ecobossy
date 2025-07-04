import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="bg-[#F8F6F0] min-h-screen ">
      <header className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer className="bg-[#E8DBCF]">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
