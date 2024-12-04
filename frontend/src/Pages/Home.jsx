import React from "react";
import NavBarComp from "../components/Appbar.jsx";
import WorkingExperience from "./WorkingExperience.jsx";
import Skill from "./Skill.jsx";
import Project from "./Project.jsx";
import DarkBG from "../assets/darkBG.jpg";
import PersonalImgPlaceholder from "../components/PersonalImgPlaceholder.jsx";

function Home() {
  return (
    <div style={{ backgroundImage: `url(${DarkBG})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", minHeight: "100vh" }} className=" flex flex-col items-center">
      <NavBarComp />
      <br />
      <br />
      <div className=" max-w-xl mx-auto text-center mt-6 px-4">
        <PersonalImgPlaceholder />
        <p className=" text-lg md:text-2xl text-white mt-4">
          Hello, I am Muhammad Afham,
          <br />
          an aspiring software developer with a strong passion for technology
          and
          <br />
          a commitment to advancing my technical skills. I am eager to learn,
          grow,
          <br />
          and make meaningful contributions in the software development field.
        </p>
      </div>
      <br />
      <br />
      <div className=" w-full px-4 mt-8">
        <Skill />
      </div>
      <br />
      <br />
      <div className=" w-full px-4 mt-8">
        <WorkingExperience />
      </div>
      <div className=" w-full px-4 mt-8 mb-8">
        <br />
        <br />
        <Project />
      </div>
    </div>
  );
}

export default Home;
