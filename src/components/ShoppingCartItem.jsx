import ActionButton from "./buttons/ActionButton";
import DivisorLine from "./DivisorLine";
import styles from "./ShoppingCartItem.module.css";

export default function ShoppingCartItem({ product }) {
  const { nombre, url_imagen, precio, cantidad } = product;

  return (
    <>
      <article className={styles.item}>
        <img src={url_imagen} className={styles.img} />
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{nombre}</h3>
          <strong className={styles.productPrice}>${precio}</strong>
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
