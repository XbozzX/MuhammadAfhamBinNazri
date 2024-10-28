import React from "react";
import NavBarComp from "../components/Navbar.jsx";
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
      <div className=" text-center inline-flex ml-96">
        <p className=" text-3xl text-white">Hello, I am Muhammad Afham</p>
        <PersonalImgPlaceholder />
      </div>
      <br />
      <br />
      <div>
        <Skill />
      </div>
      <div>
        <WorkingExperience />
      </div>
      <div>
        <Project />
      </div>
    </div>
  );
}

export default Home;
