import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="w-full bg-slate-200 p-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between">
          <div className="w-28">
            <img src={logo} alt="" />
          </div>
          <div className="flex">
            <div className="mx-5 text-2xl"><i className="fa-brands fa-instagram"></i></div>
            <div className="mx-5 text-2xl"><i className="fa-brands fa-youtube"></i></div>
            <div className="mx-5 text-2xl"><i className="fa-brands fa-facebook"></i></div>
            <div className="mx-5 text-2xl"><i className="fa-brands fa-twitter"></i></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
