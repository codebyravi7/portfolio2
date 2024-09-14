import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project1 from "./components/Project1";
import Aboutme from "./components/Aboutme";
import ProjectCard from "./components/ProjectCard";
import ecom1 from "./elements/ecom1.png";
import ecom2 from "./elements/ecom2.png";
import code1 from "./elements/code1.png";
import chat1 from "./elements/chat1.png";
import blog1 from "./elements/blog1.png";
import Myprojectsheading from "./elements/Myprojectsheading";
import Aboutmeheading from "./elements/Aboutmeheading";
import {
  desc1,
  desc2,
  desc3,
  desc4,
  title1,
  subtitle1,
  title2,
  subtitle2,
  title3,
  subtitle3,
  title4,
  subtitle4,
  link1,
  link2,
  link3,
  link4,
} from "./elements/data";
import Contactheading from "./elements/Contactheading";
const SectionHome = React.forwardRef(({ id }, ref) => (
  <div ref={ref} className="">
    <Home />
  </div>
));

const SectionFooter = React.forwardRef(({ id }, ref) => (
  <div ref={ref} className="bg-[#1A1D2B]">
    <Contactheading />
    <Footer />
  </div>
));
const SectionAbout = React.forwardRef(({ id }, ref) => (
  <div ref={ref} className="bg-[#1A1D2B]">
    <Aboutmeheading />
    <Aboutme />
  </div>
));
const SectionProjectCard1 = React.forwardRef(({ id, image }, ref) => (
  <div ref={ref} className=" bg-[#1A1D2B]">
    <Myprojectsheading />
    <div className="projects flex flex-col sm:flex-row sm:gap-1 justify-around">
      <ProjectCard
        image={ecom1}
        description={desc1}
        title={title1}
        subtitle={subtitle1}
        link={link1}
      />
      <ProjectCard
        image={chat1}
        description={desc4}
        title={title4}
        subtitle={subtitle4}
        link={link4}
      />
    </div>
    <div className="proj_prop">
      <Project1 />
    </div>
    <div className="projects flex flex-col sm:flex-row  sm:gap-1 justify-around">
      <ProjectCard
        image={blog1}
        description={desc2}
        title={title2}
        subtitle={subtitle2}
        link={link2}
      />
      <ProjectCard
        image={code1}
        description={desc3}
        title={title3}
        subtitle={subtitle3}
        link={link3}
      />
    </div>
  </div>
));

// const SectionProject = React.forwardRef(({ id }, ref) => (
//   <div ref={ref} className="min-h-screen">
//   </div>
// ));

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "project", title: "Project" },
    { id: "contact", title: "Contact" },
  ];

  const sectionRefs = useRef(
    sections.reduce((acc, section) => {
      acc[section.id] = React.createRef();
      return acc;
    }, {})
  );

  const scrollToSection = (sectionId) => {
    const sectionRef = sectionRefs.current[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = sectionRefs.current[section.id].current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App w-screen">
      <div className="fixed w-screen top-0 z-50">
        <Navbar
          scrollToSection={scrollToSection}
          currentSection={currentSection}
        />
      </div>
      <div className="relative pt-16">
        <SectionHome id="home" ref={sectionRefs.current["home"]} />
        <SectionAbout id="about" ref={sectionRefs.current["about"]} />
        {/* <SectionProject id="project" ref={sectionRefs.current["project"]} /> */}
        <SectionProjectCard1
          id="project"
          ref={sectionRefs.current["project"]}
        />

        <SectionFooter id="contact" ref={sectionRefs.current["contact"]} />
      </div>
    </div>
  );
};

export default App;
