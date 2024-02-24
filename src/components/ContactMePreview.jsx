import React from 'react'
import contactUs from "../assets/contact.jpg";
import { NavLink } from 'react-router-dom';

function ContactMePreview() {
  return (
    <div className="my-20">
    <h1 className="text-4xl font-semibold text-center">
      Want to Collaborate ?
    </h1>
    <div className="text-lg py-4 text-center">
      Want to work together? Email me directly at{" "}
      <span className="font-bold">adityachauhan84523@gmail.com</span> .
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="w-1/2 ">
        <img src={contactUs} className="" alt="" />
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold my-1 text-center md:text-left">Get In Touch</h1>
        <p>Use the below information to contact me.</p>

        <div className="flex items-center my-5">
          <div className="">
            {/* mail icon */}
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="mx-5">
            <p className="text-xl">Email Address</p>
            <p>adityachauhan84523@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center my-5">
          <div className="">
            {/* phone icon */}
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="mx-5">
            <p className="text-xl">Call Me / Whatsapp</p>
            <p>+91 9311342689</p>
          </div>
        </div>

        <div className="flex items-center my-5">
          <div className="">
            {/* instagram icon */}
            <i className="fa-brands fa-square-instagram"></i>
          </div>
          <div className="mx-5">
            <p className="text-xl">Follow me on Instagram</p>
            <p>@adityachauhan.js</p>
          </div>
        </div>
        
      </div>
    </div>
    <div className="flex justify-center my-8">
      <NavLink to={'/contact'}>
      <button className="text-white font-bold bg-blue-500 rounded p-1 px-5 text-lg">Visit Contact Page</button>
      </NavLink>
    </div>
  </div>
  )
}

export default ContactMePreview
