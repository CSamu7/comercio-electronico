import styles from "./CardProduct.module.css";
import StarRating from "./StarRating";
import LinkButton from "../buttons/LinkButton";
import img_not_found from "../../assets/imagen_no_encontrada.png";

export default function CardProduct({ product }) {
  const { id_producto, url_imagen, nombrecorto, precio, descuento, reviews } =
    product;

  const priceFixed = (precio * 19.92).toFixed(2);

  const rating = 5;

  return (
    <div className={styles.cardProduct}>
      <object
        data={`${url_imagen}`}
        className={styles.productImg}
        type="image/jpeg"
      >
        <img src={img_not_found}></img>
      </object>
      <h3 className={styles.productName}>{nombrecorto}</h3>
      {reviews && (
        <StarRating rating={rating}>
          <p className={styles.productReviews}>{reviews.length}</p>
        </StarRating>
      )}

      <strong className={styles.productPrice}>${priceFixed}</strong>
      <LinkButton
        width="100%"
        variant="btnWithBg"
        url={`/producto/${id_producto}`}
      >
        Ver producto
      </LinkButton>
    </div>
  );
}
