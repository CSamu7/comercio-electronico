import { createRoot } from "react-dom/client";
import "./index.css";
import "./normalize.css";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { router } from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
