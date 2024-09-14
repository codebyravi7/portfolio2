import React from "react";
import TypingEffect from "../elements/TypingEffect";
import image from "../elements/profile2.jpeg";
function Home() {
  return (
    <section className="w-full flex relative bg-[#1A1D2B]">
      <div className="mx-auto px-4 flex flex-col sm:flex-row relative py-16 justify-between">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative ">
          <h1 className="font-bebas-neue uppercase text-5xl sm:text-5xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Hello,👋👋
          </h1>
          <header className="px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Welcome to my <span className="text-red-700">portfolio</span>{" "}
              </h1>
              <div className="w-20 h-2 bg-green-700 my-4"></div>
              <p className="text-2xl mb-10 text-white">
                Passionate Computer Science Learner.{" "}
              </p>
              <div className="flex justify-start items-center overflow-hidden">
                <TypingEffect />
              </div>
            </div>
          </header>
          <div className="flex mt-8">
            <a
              href="https://drive.google.com/file/d/1qRyHj6i8Tt3IWisqv-ggl66xwrkr56ok/view?usp=sharing"
              className="uppercase py-2 px-4 rounded-lg bg-red-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
            >
              Find my CV
            </a>
            <a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
            >
              Read more
            </a>
          </div>
        </div>
        <div className=" sm:w-1/3 lg:w-2/5 relative  overflow-hidden flex justify-center items-center">
          <img
            src={image}
            className="max-w-xs md:max-w-sm m-auto p-10 sm:p-1 rounded-xl overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
