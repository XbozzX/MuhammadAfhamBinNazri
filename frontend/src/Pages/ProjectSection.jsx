import React from "react";
import ProjectPlaceholder from "../components/ProjectPlaceholder.jsx";
import DarkBG from "../assets/darkBG.jpg";
import Appbar from "../components/Appbar.jsx";

function Project() {
  return (
    <div style={{ backgroundImage: `url(${DarkBG})`, backgroundSize: "cover" }}>
      <Appbar />
      <h1 className=" text-white underline"> Project </h1>
      <div>
        <ProjectPlaceholder />
      </div>
    </div>
  );
}

export default Project;
