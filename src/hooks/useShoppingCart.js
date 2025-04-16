import { useEffect, useState } from "react";
import { getProducts } from "../services/shoppingCartService";

const useShoppingCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getProducts();
      setProducts(response);
    };

    getData();
  });

  const addProduct = () => {};

  const removeProduct = () => {};

  return {
    products,
  };
};

export { useShoppingCart };
