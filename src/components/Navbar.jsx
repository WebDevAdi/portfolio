import React from "react";
import logo from "../assets/logo.png";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";

function Navbar() {
    const navDropdown = document.querySelector('.nav-dropdown')
    console.log(navDropdown);

    const handleNavDropdown = () =>{
        navDropdown?.classList.toggle('nav-drop-smooth')
    }

  return (
    <nav className="sticky w-full top-0 bg-white">
      <div className=" flex justify-between items-center max-w-[1200px] mx-auto max-h-[80px] p-3 px-6">
        <div className="flex items-center">
          <div className="text-2xl mx-2 md:hidden cursor-pointer" id="hamburgerIcon" onClick={handleNavDropdown}>
            {/* hambergur icon */}
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="w-32">
            {/* Logo */}
            <img src={logo} className="object-contain" alt="" />
          </div>
        </div>
        <div className="flex ">
          {/* nav items */}
          <div className="hidden lg:flex">
            <NavItems />
          </div>

          <NavLink to={'https://github.com/WebDevAdi'} target="_blank">
          <div className="mx-5 cursor-pointer text-lg md:text-lg border rounded px-3 py-1 text-white bg-slate-800"> <i class="fa-brands fa-github"></i> Github</div>
          </NavLink>
        </div>
      </div>
      <div className="nav-dropdown md:h-full border-t border-b md:flex lg:hidden justify-center overflow-hidden">
        <NavItems />
      </div>
    </nav>
  );
}

export default Navbar;
