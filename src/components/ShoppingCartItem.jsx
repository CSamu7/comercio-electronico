import ActionButton from "./buttons/ActionButton";
import DivisorLine from "./DivisorLine";
import styles from "./ShoppingCartItem.module.css";
import Image from "./Image";
import { ShoppingCartContext } from "../context/ShoppingCarContext";
import { useContext } from "react";

export default function ShoppingCartItem({ product }) {
  const { id_prod, nombre, url_imagen, precio, cantidad, stock } = product;

  const { updateProductAmount, removeProduct } =
    useContext(ShoppingCartContext);

  const handleUpdateProduct = (newAmount) => {
    if (newAmount < 1 || newAmount > stock) return;

    updateProductAmount(id_prod, newAmount);
  };

  return (
    <>
      <article className={styles.item}>
        <Image url={url_imagen} className={styles.img}></Image>
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{nombre}</h3>
          <strong className={styles.productPrice}>${precio}</strong>
          <div className={styles.productCounter}>
            <button
              onClick={() => handleUpdateProduct(cantidad - 1)}
              disabled={cantidad === 1}
            >
              -
            </button>
            <p>{cantidad}</p>
            <button
              onClick={() => handleUpdateProduct(cantidad + 1)}
              disabled={cantidad === stock}
            >
              +
            </button>
          </div>
        </div>
        <ActionButton
          variant={"btnDelete"}
          className={styles.btnDelete}
          width="30px"
          onClick={() => {
            removeProduct(id_prod);
          }}
        >
          X
        </ActionButton>
      </article>
      <DivisorLine></DivisorLine>
    </>
  );
}
