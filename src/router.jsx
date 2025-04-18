import { createBrowserRouter, createRoutesFromElements } from "react-router";
import { Route } from "react-router";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import { getAllProducts, getProduct } from "./services/productService.js";

const homeRoutes = ["inicio", "/"].map((path) => {
  return (
    <Route path={path} loader={getAllProducts} element={<Home></Home>}></Route>
  );
});

const routesJSX = (
  <Route path="/">
    {homeRoutes}
    <Route path="/inicio-de-sesion" element={<Login></Login>}></Route>
    <Route path="/registro" element={<Register></Register>}></Route>
    <Route
      path="/productos"
      element={<Products></Products>}
      loader={getAllProducts}
    ></Route>
    <Route path="producto">
      <Route
        path="/producto/:idProduct"
        element={<Product></Product>}
        loader={getProduct}
      ></Route>
    </Route>
  </Route>
);

const routes = createRoutesFromElements(routesJSX);
const router = createBrowserRouter(routes);

export { router };
