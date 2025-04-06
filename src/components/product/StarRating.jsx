import styles from "./StarRating.module.css";
import starSvgUrl from "../../assets/star_rating.png";

export default function StarRating({ rating, children }) {
  const stars = Array.from({ length: rating }, (_, k) => (
    <img src={starSvgUrl} className={styles.star} key={k}></img>
  ));

  return (
    <div className={styles.starRating}>
      {stars}
      {children}
    </div>
  );
}
