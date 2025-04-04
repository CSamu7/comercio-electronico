import styles from "./CardProduct.module.css";
import StarRating from "./StarRating";
import ActionButton from "../buttons/ActionButton";

export default function CardProduct({ product }) {
  const { url_imagen, nombrecorto, precio, descuento, reviews } = product;

  const priceFixed = (precio * 19.92).toFixed(2);

  const rating = 5;

  return (
    <div className={styles.cardProduct}>
      <img src={url_imagen} className={styles.productImg}></img>
      <h3 className={styles.productName}>{nombrecorto}</h3>
      {reviews && (
        <StarRating rating={rating}>
          <p className={styles.productReviews}>{reviews.length}</p>
        </StarRating>
      )}

      <strong className={styles.productPrice}>${priceFixed}</strong>
      <ActionButton width="100%" variant="btnWithBg">
        Ver producto
      </ActionButton>
    </div>
  );
}
