import styles from "./CardProduct.module.css";

export default function CardProduct({ product }) {
  return (
    <div className={styles.cardProduct}>
      <img src={product["url_img"]} className={styles.productImg}></img>
      <h3 className={styles.productName}>{product.shortname}</h3>
      <strong className={styles.productPrice}>${product.price}</strong>
    </div>
  );
}
