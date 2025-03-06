import products from "../../products.json";
import CardProduct from "./CardProduct";
import styles from "./SectionProducts.module.css";

export default function SectionProducts() {
  const cardsProducts = products.map((product) => {
    return <CardProduct product={product} key={product.id}></CardProduct>;
  });

  return (
    <section className={styles.sectionProducts}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Telescopios</h2>
      </header>
      <div className={styles.products}>{cardsProducts}</div>
    </section>
  );
}
