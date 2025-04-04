import styles from "./CardProduct.module.css";
import StarRating from "./StarRating";
import ActionButton from "../buttons/ActionButton";

export default function CardProduct({ product }) {
  const { url_img, shortname, price, discount, reviews } = product;

  const rating = 5;

  return (
    <div className={styles.cardProduct}>
      <img src={url_img} className={styles.productImg}></img>
      <h3 className={styles.productName}>{shortname}</h3>
      {reviews && (
        <StarRating rating={rating}>
          <p className={styles.productReviews}>{reviews.length}</p>
        </StarRating>
      )}

      <strong className={styles.productPrice}>${price}</strong>
      <ActionButton width="100%" variant="btnWithBg">
        Ver producto
      </ActionButton>
    </div>
  );
}
