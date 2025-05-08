import { useEffect, useState } from "react";
import {
  getShoppingCart,
  addShoppingCartService,
  updateProductAmountService,
  removeShoppingCartService,
} from "../services/shoppingCartService";
import { useLocalStorage } from "./useLocalStorage";

//Hacer que todo este necesite el token de usuario para poder
const useShoppingCart = (idUser) => {
  const [shoppingProducts, setShoppingProducts] = useState([]);
  const { getItem } = useLocalStorage();
  const token = getItem("token");

  useEffect(() => {
    const getData = async () => {
      const response = await getShoppingCart(idUser);
      setShoppingProducts(response);
    };

    if (!idUser) return;

    getData();
  }, [idUser]);

  const getNumberItems = () => {
    return shoppingProducts?.reduce((acc, prev) => (acc += prev.cantidad), 0);
  };

  const addProduct = async (idProduct, cantidad) => {
    if (!token) return;

    const response = await addShoppingCartService(idProduct, cantidad, token);

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
    if (!token) return;

    const response = await removeShoppingCartService(idProduct, token);

    return response;
  };

  return {
    shoppingProducts,
    addProduct,
    updateProductAmount,
    removeProduct,
    getNumberItems,
  };
};

export { useShoppingCart };
