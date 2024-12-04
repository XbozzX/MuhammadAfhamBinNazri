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
        <img src={ReactImg} alt="React icons " className="h-10 w-10 md:h-12 md:w-12"/>
        <img src={NodeJs} alt="NodeJs icons " className="h-10 w-10 md:h-12 md:w-12"/>
        <img src={Arduino} alt="Arduino icons " className="h-10 w-10 md:h-12 md:w-12"/>
        <img src={Ccp} alt="C++ icons " className="h-10 w-10 md:h-12 md:w-12"/>
        <img src={Css_3} alt="Css icons " className="h-10 w-10 md:h-12 md:w-12"/>
        <img src={Html} alt="Html icons " className="h-10 w-10 md:h-12 md:w-12"/>
        <img src={Js} alt="Js icons " className="h-10 w-10 md:h-12 md:w-12"/>
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
