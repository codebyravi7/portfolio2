import React, { useState } from "react";

function Navbar({ scrollToSection, currentSection }) {
  const [openmenu, setOpenmenu] = useState(false);
  const sections = ["Home", "About", "Project", "Contact"];
  return (
    <nav className="bg-[#1A1D2B] border-b-2 rounded-b-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center space-x-2 text-2xl font-medium">
            <span>
              <img
                src="https://www.svgrepo.com/show/452102/slack.svg"
                alt="AI Logo"
                width="64"
                height="64"
                className="w-16"
              />
            </span>
            <span className="text-white">ℛ𝒶𝓋𝒾</span>
          </div>
        </span>
        <div className="page-links hidden md:block mr-4 text-lg">
          <ul className="flex font-medium mt-4 rounded-lg bg-[#1A1D2B] dark:border-gray-700">
            {sections.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white hover:text-gray-300 px-2 mx-2 ${
                    currentSection === item.toLowerCase() ? "font-bold" : ""
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="block md:hidden mr-4 items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
          onClick={() => setOpenmenu(!openmenu)}
        >
          {openmenu ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <>
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </>
          )}
        </button>
        <div
          className={`${
            openmenu ? "block" : "hidden"
          }   border-2 border-gray-100 p-1 rounded-xl h-full w-full`}
          id="navbar-hamburger"
        >
          <div className="h-full w-full bg-pink-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
            <ul className="flex flex-col font-medium mt-4 rounded-lg  bg-[#1A1D2B] dark:border-gray-700">
              {sections.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-white hover:bg-gray-300 hover:text-black px-2 mx-2  py-1  text-lg w-full ${
                      currentSection === item.toLowerCase() ? "font-bold" : ""
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
