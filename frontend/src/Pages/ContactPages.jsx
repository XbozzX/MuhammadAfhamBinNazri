import React from "react";
import Appbar from "../components/Appbar";
import DarkBG from "../assets/darkBG.jpg";

const ContactPages = () => {
  return (
    <div style={{ backgroundImage: `url(${DarkBG})`, backgroundSize: "cover" }}>
      <Appbar />
      <h1 className=" text-white underline"> Contact </h1>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <h2>Test</h2>
      </div>
    </div>
  );
};

export default ContactPages;
