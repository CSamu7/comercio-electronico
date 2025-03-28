import productsJSON from "../../products.json";

const useProduct = () => {
  const products = [...productsJSON];

  const getColumnValues = (products, column) => {
    const value = products.reduce((acc, product) => {
      return new Set([...acc, product[column]]);
    }, []);

    return Array.from(value);
  };

  const getProducts = () => {
    return products;
  };

  return {
    getProducts,
    products,
    getColumnValues,
  };
};

export { useProduct };
