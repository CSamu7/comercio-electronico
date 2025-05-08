import ActionButton from "./buttons/ActionButton";
import DivisorLine from "./DivisorLine";
import styles from "./ShoppingCartItem.module.css";
import Image from "./Image";

export default function ShoppingCartItem({
  product,
  updateProduct,
  removeProduct,
}) {
  const { id_prod, nombre, url_imagen, precio, cantidad, stock } = product;

  const handleUpdateProduct = (newAmount) => {
    if (newAmount < 1 || newAmount > stock) return;

    updateProduct(id_prod, newAmount);
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
              onClick={() => {
                handleUpdateProduct(cantidad - 1);
                window.location.reload();
              }}
            >
              -
            </button>
            <p>{cantidad}</p>
            <button
              onClick={() => {
                window.location.reload();
                handleUpdateProduct(cantidad + 1);
              }}
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
            window.location.reload();
          }}
        >
          X
        </ActionButton>
      </article>
      <DivisorLine></DivisorLine>
    </>
  );
}
