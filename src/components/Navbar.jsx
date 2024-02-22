import React from "react";
import logo from "../assets/logo.png";
import NavItems from "./NavItems";

function Navbar() {
    const navDropdown = document.querySelector('.nav-dropdown')
    console.log(navDropdown);

    const handleNavDropdown = () =>{
        navDropdown.classList.toggle('nav-dropdown-smooth')
    }

  return (
    <nav className="">
      <div className=" flex justify-between items-center max-w-[1500px] mx-auto max-h-[80px] p-3 px-6">
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

          <div className="mx-5 text-xl md:text-2xl">Github</div>
        </div>
      </div>
      <div className="nav-dropdown h-0 md:h-full border-t md:flex lg:hidden justify-center overflow-hidden">
        <NavItems />
      </div>
    </nav>
  );
}

export default Navbar;
