import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePages from "./Pages/Home.jsx";
import ProjectPages from "./Pages/ProjectSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        //TODO: WHEN PRESS IT ,,, IT WILL GIVE 404 ERROR
        <Route path="/" element={<HomePages />} />
        <Route path="/Project" element={<ProjectPages />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
