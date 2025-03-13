import products from "../../products.json";
import CardProduct from "./CardProduct";
import styles from "./SectionProducts.module.css";

export default function SectionProducts({ title }) {
  const cardsProducts = products.map((product) => {
    return <CardProduct product={product} key={product.id}></CardProduct>;
  });

  return (
    <section className={styles.sectionProducts}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </header>
      <div className={styles.products}>
        {cardsProducts}
        <a className={styles.btnMoreProducts}>Ver mas productos</a>
      </div>
    </section>
  );
}
