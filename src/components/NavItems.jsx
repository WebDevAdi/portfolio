import React from "react";
import { NavLink } from "react-router-dom";

function NavItems() {
  return (
    <div className="flex md:flex-row flex-col text-center md:bg-white bg-slate-300">
      <div className="hover:font-semibold mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400 md:hover:bg-white">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-blue-500" : ""}`
          }
        >
          Home
        </NavLink>
      </div>
      <div className="cursor-pointer hover:font-semibold mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400 md:hover:bg-white">
      <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-blue-500" : ""}`
          }
        >
          Projects
        </NavLink>
      </div>
      <div className="hover:font-semibold cursor-pointer mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400 md:hover:bg-white">
        <a href="https://drive.google.com/file/d/1GookPM0ilBTpmiWDYCHDcZfqQDRGLEnP/view?usp=drive_link"  target="_blank">Resume</a>
      </div>
      <div className="hover:font-semibold mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400 md:hover:bg-white">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `${isActive ? "border-b-2  border-blue-500" : ""}`
          }
        >
          About
        </NavLink>
      </div>
      <div className="hover:font-semibold mx-0 md:mx-5 text-2xl py-3 md:py-0 hover:bg-slate-400 md:hover:bg-white">
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-blue-500" : ""}`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default NavItems;
