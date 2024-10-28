import React from "react";
import ReactImg from "../assets/reactIcon.png";
import NodeJs from "../assets/NodeJs.png";
import Arduino from "../assets/arduino.png";
import Ccp from "../assets/ccp.png";
import Css_3 from "../assets/css_3.png";
import Html from "../assets/html.png";
import Js from "../assets/js.png";
import Python from "../assets/python.png";

function SkillPlaceholder() {
  return (
    <div className=" mr-96">
      <div className=" w-12 h-12 inline-flex space-x-7 ">
        <img src={ReactImg} alt="React icons " />
        <img src={NodeJs} alt="NodeJs icons " />
        <img src={Arduino} alt="Arduino icons " />
        <img src={Ccp} alt="C++ icons " />
        <img src={Css_3} alt="Css icons " />
        <img src={Html} alt="Html icons " />
        <img src={Js} alt="Js icons " />
      </div>
      <br />
      <br />
      <div className="  ml-96 text-white">
        <p>Frontend : React, HTML, CSS, JavaScript</p>
        <p>Backend : Node.js, Express.js, JavaScript</p>
        <p>Database : MongoDB, MySQL, Microsoft Access</p>
        <p>Iot : Arduino, C++, Blynk</p>
        <p>Code Quality : Git, Github Action</p>
      </div>
      <div> Tech </div>
    </div>
  );
}

export default SkillPlaceholder;
