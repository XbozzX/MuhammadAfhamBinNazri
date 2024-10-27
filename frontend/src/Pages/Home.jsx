import React from "react";
import NavBarComp from "../components/Navbar.jsx";
import WorkingExperience from "./WorkingExperience.jsx";
import Skill from "./Skill.jsx";
import Project from "./Project.jsx";

function Home() {
  return (
    <div>
      <NavBarComp />
      <div>
        <p className=" text-3xl">Hello, I am Muhammad Afham,</p>
      </div>
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
