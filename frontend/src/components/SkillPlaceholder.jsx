import React from "react";
import ReactImg from "../assets/reactIcon.png";
import NodeJs from "../assets/nodeJs.png";
import Arduino from "../assets/arduino.png";
import Ccp from "../assets/ccp.png";
import Css_3 from "../assets/css_3.png";
import Html from "../assets/html.png";
import Js from "../assets/js.png";
import Python from "../assets/python.png";

function SkillPlaceholder() {
  return (
    <div className=" mx-4 md:mx-16 lg:mr-96">
      <div className=" flex flex-wrap justify-center gap-4">
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
      <div className="mt-8 space-y-2 text-center md:text-left">
        <p className="text-sm md:text-base">
          <span className="font-semibold">Frontend:</span> React, HTML, CSS, JavaScript
        </p>
        <p className="text-sm md:text-base">
          <span className="font-semibold">Backend:</span> Node.js, Express.js, JavaScript
        </p>
        <p className="text-sm md:text-base">
          <span className="font-semibold">Database:</span> MongoDB, MySQL, Microsoft Access
        </p>
        <p className="text-sm md:text-base">
          <span className="font-semibold">IoT:</span> Arduino, C++, Blynk
        </p>
        <p className="text-sm md:text-base">
          <span className="font-semibold">Code Quality:</span> Git, GitHub Actions
        </p>
      </div>
    </div>
  );
}

export default SkillPlaceholder;
