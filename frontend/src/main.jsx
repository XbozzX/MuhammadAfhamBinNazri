import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePages from "./Pages/Home.jsx";
import ProjectPages from "./Pages/ProjectSection.jsx";
import ContactPages from "./Pages/ContactPages.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="https://xbozzx.github.io/MuhammadAfhamBinNazri/"
          element={<HomePages />}
        />
        <Route
          path="https://xbozzx.github.io/MuhammadAfhamBinNazri/Project"
          element={<ProjectPages />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
