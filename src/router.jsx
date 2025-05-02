import { createBrowserRouter, createRoutesFromElements } from "react-router";
import { Route } from "react-router";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Products from "./pages/Products/Products.jsx";
import Product from "./pages/Product/Product.jsx";
import { getAllProducts, getProduct } from "./services/productService.js";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Identity from "./pages/Identity.jsx";
import PaymentSucessful from "./pages/PaymentSuccess.jsx";

const homeRoutes = ["inicio", "/"].map((path) => {
  return (
    <Route path={path} loader={getAllProducts} element={<Home></Home>}></Route>
  );
});

const routesJSX = (
  <Route path="/">
    {homeRoutes}
    <Route path="/inicio-de-sesion" element={<Login></Login>}></Route>
    <Route path="/acerca-de" element={<AboutUs></AboutUs>}></Route>
    <Route path="/registro" element={<Register></Register>}></Route>
    <Route path="/carrito" element={<ShoppingCart></ShoppingCart>}></Route>
    <Route path="/identidad" element={<Identity></Identity>}></Route>
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
    <Route
      path="payment-success"
      element={<PaymentSucessful></PaymentSucessful>}
    ></Route>
  </Route>
);

const routes = createRoutesFromElements(routesJSX);
const router = createBrowserRouter(routes);

export { router };
