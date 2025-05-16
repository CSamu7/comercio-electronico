import { getCheckoutURL } from "../services/checkoutService";
import { addSale } from "../services/saleService";
import { useLocalStorage } from "./useLocalStorage";
import { ShoppingCartContext } from "../context/ShoppingCarContext";
import { useContext } from "react";

export default function useSale() {
  const { getItem } = useLocalStorage();
  const { getProductAmount } = useContext(ShoppingCartContext);

  const createSale = async (products) => {
    verify(products);

    const token = getItem("token");
    const { url } = await getCheckoutURL(products, token);

    if (!url) throw new Error("Error");

    await addSale(products, token);

    return url;
  };

  const verify = (products) => {
    if (products.length < 1)
      throw new Error("No has seleccionado una cantidad");

    products.forEach((product) => {
      const { id_producto, name, amount, stock } = product;

      if (getProductAmount(id_producto) + amount > stock) {
        throw new Error(
          `El producto ${name} solo tiene disponible ${stock} unidades`
        );
      }
    });
  };

  return {
    createSale,
  };
}
