import ActionButton from "./buttons/ActionButton";
import DivisorLine from "./DivisorLine";
import styles from "./ShoppingCartItem.module.css";

export default function ShoppingCartItem({ product, updateProduct }) {
  const { id_prod, nombre, url_imagen, precio, cantidad, stock } = product;

  const handleUpdateProduct = (newAmount) => {
    if (newAmount < 1 || newAmount >= stock) return;

    updateProduct(id_prod, newAmount);
  };

  return (
    <>
      <article className={styles.item}>
        <img src={url_imagen} className={styles.img} />
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{nombre}</h3>
          <strong className={styles.productPrice}>${precio}</strong>
          <div className={styles.productCounter}>
            <button onClick={() => handleUpdateProduct(cantidad - 1)}>-</button>
            <p>{cantidad}</p>
            <button onClick={() => handleUpdateProduct(cantidad + 1)}>+</button>
          </div>
        </div>
        <ActionButton
          variant={"btnDelete"}
          className={styles.btnDelete}
          width="30px"
        >
          X
        </ActionButton>
      </article>
      <DivisorLine></DivisorLine>
    </>
  );
}
