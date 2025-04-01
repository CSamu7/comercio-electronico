import { useProduct } from "../../hooks/useProduct";
import LinkButton from "../buttons/LinkButton";
import CardProduct from "./CardProduct";
import styles from "./SectionProducts.module.css";

export default function SectionProducts({ title, filterName, filterValue }) {
  const { filterProducts } = useProduct();

  const filtProducts = filterProducts(filterName, filterValue);

  const cardsProducts = filtProducts.map((product) => {
    return <CardProduct product={product} key={product.id}></CardProduct>;
  });

  return (
    <section className={styles.sectionProducts}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <LinkButton
          variant="btnInline"
          url="./productos"
          className={styles.btnSeeMore}
        >{`Ver mas ${title}`}</LinkButton>
      </header>
      <div className={styles.products}>{cardsProducts}</div>
    </section>
  );
}
