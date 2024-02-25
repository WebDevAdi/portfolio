import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
