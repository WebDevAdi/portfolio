import React, { useEffect } from "react";
import profilePhoto from "../assets/profilePhoto.png";

function About() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className="my-20 flex flex-col md:flex-row justify-around">
      <div className="px-10">
        {/* profile image and skills */}
        <div>
          <img src={profilePhoto} alt="" />
        </div>
        <div className="my-3 text-3xl font-bold">Aditya Chauhan</div>
        <div className="text-lg">Web Developer</div>
        <div className="mt-6 text-2xl font-bold">Skills</div>
        <div>
          <div className="my-1">
            <i class="fa-brands fa-html5"></i> HTML5
          </div>
          <div className="my-1">
            <i class="fa-brands fa-css3-alt"></i> CSS3
          </div>
          <div className="my-1">
            <i class="fa-brands fa-js"></i> JavaScript
          </div>
          <div className="my-1">
            <i class="fa-brands fa-react"></i> ReactJs
          </div>
          <div className="my-1 flex">
            <div className="w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
              >
                <path d="M18 13c-1.858 0-3.489-1.297-5.748-3.092C10.731 8.699 7.246 8.289 6.7 8.714L5.293 7.293C7.346 5.239 8.586 4 11 4c3.018 0 5.214 1.688 6.979 3.046.554.425 1.077.827 1.527 1.092.342.201 1.073.436 1.685.253.391-.115.689-.39.914-.838l1.834.789C22.879 11.259 20.659 13 18 13zM8.983 6.633c1.707.234 3.512.913 4.514 1.709C15.632 10.04 16.894 11 18 11c.745 0 1.435-.207 2.042-.599-.611-.097-1.158-.31-1.548-.539-.557-.328-1.128-.767-1.732-1.231C15.156 7.397 13.337 6 11 6 10.214 6 9.641 6.176 8.983 6.633zM13 20c-1.858 0-3.489-1.297-5.748-3.092C5.732 15.7 2.246 15.287 1.7 15.714l-1.407-1.421C2.346 12.239 3.586 11 6 11c3.018 0 5.214 1.688 6.979 3.046.554.425 1.077.827 1.527 1.092.342.201 1.073.433 1.685.253.391-.115.689-.39.914-.838l1.834.789C17.879 18.259 15.659 20 13 20zM3.983 13.633c1.707.234 3.512.913 4.514 1.709C10.632 17.04 11.894 18 13 18c.745 0 1.435-.207 2.042-.599-.611-.097-1.158-.31-1.548-.539-.557-.328-1.128-.767-1.732-1.231C10.156 14.397 8.337 13 6 13 5.214 13 4.641 13.176 3.983 13.633z"></path>
              </svg>
            </div>
            <div className="ml-1">Tailwind</div>
          </div>
          <div className="my-1">
            <i class="fa-brands fa-node"></i> NodeJs
          </div>
          <div className="my-1 flex">
            <div className="w-5 border-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
              >
                <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
              </svg>
            </div>
            <div className="ml-1">ExpressJs</div>
          </div>
          <div className="my-1 flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115c-.28-.394-.53-.954-.735-1.44c-.036.495-.055.685-.523 1.184c-.723.566-4.438 3.682-4.74 10.02c-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481a28.48 28.48 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218m-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695c-.381-.045-.765-1.76-.765-2.405"
                />
              </svg>
            </div>{" "}
            <div className="ml-1">MongoDB</div>
          </div>
          <div className="my-1">
            <i class="fa-brands fa-github"></i> Github
          </div>
        </div>
      </div>

      <div className="max-w-[800px] px-10">
        {/* All information */}
        <h1 className="text-4xl font-bold my-5">About Me</h1>
        <p className="text-lg">
          I'm a passionate web developer with a love for creating beautiful and
          functional websites. My journey in web development began with a
          curiosity about how websites are built, and I haven't looked back
          since. I enjoy the perfect blend of creativity and logic that web
          development offers, and I'm always eager to learn new technologies to
          enhance the user experience.
        </p>

        <h1 className="text-4xl font-bold my-5">Education</h1>
        <div>
          <div className="font-semibold text-xl">
            Centeral Board of Secondary Education : Class 10th
          </div>
          <div className="my-3">
            <span className="">
             School : Sarvodaya Bal Vidyalaya, Sadiq Nagar, New Delhi-110048
            </span>{" "}
            <span className="w-1 border border-slate-400 mx-3"></span>
            <span>Batch : 2019-2020</span>
          </div>
          <div>
            <li>87% in aggregate</li>
          </div>
          <div>
            <li className="underline">
              <a href="">View Report Card</a>
            </li>
          </div>
        </div>

        <div className="my-8">
          <div className="font-semibold text-xl">
            Centeral Board of Secondary Education : Class 12th
          </div>
          <div className="my-3">
            <span className="">
             School : Sarvodaya Bal Vidyalaya, Sadiq Nagar, New Delhi-110048
            </span>{" "}
            <span className="w-1 border border-slate-400 mx-3"></span>
            <span>Batch : 2021-2022</span>
          </div>
          <div>
            <li>73% in aggregate</li>
          </div>
          <div>
            <li className="underline">
              <a href="">View Report Card</a>
            </li>
          </div>
        </div>

        <div className="my-8">
          <div className="font-semibold text-xl">
            Bachelore of Computer Applications (BCA)
          </div>
          <div className="my-3">
            <span className="">
             University : Indira Gandhi National Open University (IGNOU)
            </span>{" "}
            <span className="w-1 border border-slate-400 mx-3"></span>
            <span>Batch : 2023-2026 (aspected)</span>
          </div>
          <div>
            <li>Currently in 2nd Semester</li>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
