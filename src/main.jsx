import { createRoot } from "react-dom/client";
import "./index.css";
import "./normalize.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import { StrictMode } from "react";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Products from "./pages/Products.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inicio-de-sesion" element={<Login></Login>}></Route>
        <Route path="/registro" element={<Register></Register>}></Route>
        <Route path="/productos" element={<Products></Products>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
