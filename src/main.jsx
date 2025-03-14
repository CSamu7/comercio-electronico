import { createRoot } from "react-dom/client";
import "./index.css";
import "./normalize.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inicio-de-sesion"></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
