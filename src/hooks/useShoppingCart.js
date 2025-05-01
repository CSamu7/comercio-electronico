import { useEffect, useState } from "react";
import {
  getShoppingCart,
  addShoppingCartService,
  updateProductAmountService,
  removeShoppingCartService,
} from "../services/shoppingCartService";

const useShoppingCart = (idUser) => {
  const [shoppingProducts, setShoppingProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getShoppingCart(idUser);
      setShoppingProducts(response);
    };

    if (!idUser) return;

    getData();
  }, [idUser]);

  const addProduct = async (idProduct) => {
    const response = await addShoppingCartService(idProduct);

    return response;
  };

  const updateProductAmount = async (idProduct, amount) => {
    const response = await updateProductAmountService(
      idUser,
      idProduct,
      amount
    );

    setShoppingProducts(response);
  };

  const removeProduct = async (idProduct) => {
    const response = await removeShoppingCartService(idProduct);

    return response;
  };

  return {
    shoppingProducts,
    addProduct,
    updateProductAmount,
    removeProduct,
  };
};

export { useShoppingCart };
