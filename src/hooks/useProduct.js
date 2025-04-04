import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const list = await getAllProducts();
      setProducts(list);
    };

    getProducts();
  }, []);

  const getColumnValues = (products, column) => {
    const value = products.reduce((acc, product) => {
      return new Set([...acc, product[column]]);
    }, []);

    return Array.from(value);
  };

  const filterProducts = (filter, value) => {
    return products.filter((product) => product[filter] === value);
  };

  return {
    products,
    getColumnValues,
    filterProducts,
  };
};

export { useProduct };
