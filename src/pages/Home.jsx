import React from "react";
import profilePhoto from "../assets/profilePhoto.png";
import Technologies from "../components/Technologies";
import Project from "../components/Project";
import { NavLink } from "react-router-dom";
import myPhoto from "../assets/myPhoto.png";
import ContactMePreview from "../components/ContactMePreview";

function Home() {
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse justify-around items-center my-20 px-10">
        <div>
          {/* Intro */}
          <div className="max-w-[800px] text-2xl md:text-left text-center my-10">
            <span className="text-orange-500 font-semibold">Hi</span>, I am{" "}
            <span className="text-blue-500 font-semibold">Aditya Chauhan</span>,{" "}
            <br />
            "Welcome to my digital space! I'm a passionate MERN stack developer,
            crafting seamless web experiences through the fusion of MongoDB,
            Express.js, React, and Node.js."
            <div className="my-4">
              <button className="text-white bg-blue-500 p-1 px-5 font-bold text-lg rounded  ">
              <a href="https://drive.google.com/file/d/1GookPM0ilBTpmiWDYCHDcZfqQDRGLEnP/view?usp=drive_link"  target="_blank">Resume</a>
              </button>
              <button className="text-white bg-orange-500 p-1 px-5 font-bold text-lg rounded  mx-3">
                Hire Me !
              </button>
            </div>
          </div>
        </div>

        <div>
          {/* profile photo */}
          <img src={profilePhoto} alt="" />
        </div>
      </div>

      {/* Technologies description */}
      <div>
        <h1 className="font-semibold text-center text-4xl">
          Technologies I am Good At{" "}
        </h1>
        <Technologies />
      </div>

      {/* projects */}
      <div className="my-20">
        <h1 className="text-4xl font-semibold text-center my-5">Projects</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3">
          {/* projects */}
          <div className="mx-4">
            <Project />
          </div>
          <div className="mx-4">
            <Project />
          </div>
          <div className="mx-4">
            <Project />
          </div>
        </div>
        <div className="my-10 text-center">
          <button className="text-white bg-blue-500 font-bold px-4 p-1 rounded">
            <NavLink to={"/projects"}>View More...</NavLink>
          </button>
        </div>
      </div>

      {/* About Me */}
      <div>
        <h1 className="text-4xl font-semibold text-center my-5">Who Am I ?</h1>
        <p className="text-lg text-center">
          Hi,I'm <span className="font-semibold">Aditya Chauhan</span>, a
          passionate web developer with a love for creating beautiful and
          functional websites. I have over 1 years of experience in MERN Stack
          Web development, specializing in HTML, CSS, and JavaScript. I'm also
          skilled in using modern frameworks like React to build interactive
          user interfaces and Nodejs, Expressjs and MongoDB for server side
          developement. My goal is to combine my creativity and technical
          expertise to deliver engaging web experiences.
        </p>

        <div className="flex items-center justify-center my-5">
          <div className="flex flex-col">
            <div className="flex items-center ">
              <div className="h-20 w-20 rounded-full overflow-hidden">
                <img src={myPhoto} alt="" />
              </div>
              <div className="mx-10">
                <div className="my-2 font-semibold text-lg">Aditya Chauhan</div>
                <div className="my-2"> MERN Developer</div>
              </div>
            </div>
            <div className="text-center">
              <button className="text-white bg-blue-500 font-bold px-2 p-1 rounded my-5">
                <NavLink to={"/about"}>Know More...</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Me */}
     <div>
      <ContactMePreview />
     </div>


     
    </div>
  );
}

export default Home;
