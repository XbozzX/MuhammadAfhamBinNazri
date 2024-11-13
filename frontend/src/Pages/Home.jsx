import React from "react";
import NavBarComp from "../components/Appbar.jsx";
import WorkingExperience from "./WorkingExperience.jsx";
import Skill from "./Skill.jsx";
import Project from "./Project.jsx";
import DarkBG from "../assets/darkBG.jpg";
import PersonalImgPlaceholder from "../components/PersonalImgPlaceholder.jsx";

function Home() {
  return (
    <div style={{ backgroundImage: `url(${DarkBG})`, backgroundSize: "cover" }}>
      <NavBarComp />
      <br />
      <br />
      <div className=" max-w-fit ml-auto mr-auto">
        <PersonalImgPlaceholder />
        <p className=" text-2xl text-white p-3">
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
      <div>
        <Skill />
      </div>
      <br />
      <br />
      <div>
        <WorkingExperience />
      </div>
      <div>
        <br />
        <br />
        <Project />
      </div>
    </div>
  );
}

export default Home;
