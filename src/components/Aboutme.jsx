import React from "react";
import profile from "../elements/profile1.jpeg";
import github from "../elements/github.png";
import linkedin from "../elements/linkedin.png";
import leetcode from "../elements/leetcode.png";
function Aboutme() {
  return (
    <section
      id="container"
      className="flex justify-center relative bg-[#1A1D2B] "
    >
      <div
        id="container"
        className="w-full flex flex-col md:flex-row  relative   max-w-screen-xl"
      >
        <div className="mr-10 flex justify-center">
          <img
            className="rounded-lg min-w-[400px]  "
            src={profile}
            alt="image of myself"
          />
        </div>
        <div className="w-full px-6 ">
          <h1 className="text-white font-bold text-3xl mt-6 mb-8 ">
            Hey it's me,<span className="text-red-500">Ravikant Kushwaha</span>
          </h1>

          <p className="text-white w-full  text-lg ">
            I am a passionate software engineer currently pursuing a B.Tech in
            Computer Science & Engineering from Madan Mohan Malaviya University
            of Technology (MMMUT), Gorakhpur. With a strong foundation in web
            development, I have built dynamic and responsive applications using
            technologies such as the MERN stack. My expertise also extends to
            working with state management and authentication, specifically using
            JWT for secure user authentication. I have solved over 500+ Data
            Structures and Algorithms problems across platforms like CodeChef,
            Codeforces, and LeetCode, earning competitive rankings globally. My
            dedication to continuous learning has helped me refine my
            problem-solving skills, resulting in certifications in Machine
            Learning and C++ Programming. In addition to my technical skills, I
            have developed projects like a Profile Management System and an
            E-commerce platform, improving user experiences by focusing on speed
            and responsiveness. Outside of coding, I enjoy playing chess,
            carrom, and competitive cricket, balancing my technical pursuits
            with recreational interests.
          </p>

          <div
            id="social"
            className="flex flex-col justify-center items-center gap-4 "
          >
            <a
              rel="noopener"
              target="_blank"
              href="#"
              className="bg-[#1A1D2B] border-b-2 border-r-2 hover:border-b-4 hover:cursor-pointer rounded-lg p-5 w-[80%] my-1 flex items-center gap-2 text-white "
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src={github}
                width="20px"
                height="20px"
                alt="Github"
              />
              <span className="hover:text-blue-700">Visit my Github</span>
            </a>
            <a
              rel="noopener"
              target="_blank"
              href="#"
              className="bg-[#1A1D2B] border-b-2 border-r-2 hover:border-b-4 hover:cursor-pointer rounded-lg p-5 w-[80%]  flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src={linkedin}
                width="20px"
                height="20px"
                alt="LinkedIn"
              />
              <span className="hover:text-blue-700">Follow me on Linkedin</span>
            </a>
            <a
              rel="noopener"
              target="_blank"
              href="#"
              className="bg-[#1A1D2B] border-b-2 border-r-2 hover:border-b-4 hover:cursor-pointer rounded-lg p-5 w-[80%] my-1 flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src={leetcode}
                width="20px"
                height="20px"
                alt="Leetcode"
              />
              <span className="hover:text-blue-700">Follow me on Leetcode</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
