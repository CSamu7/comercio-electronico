import { useProduct } from "../hooks/useProduct";
import { useProductsFilter } from "../hooks/useProductsFilter";

import Layout from "../components/Layout";
import CardProduct from "../components/product/CardProduct";
import Filters from "../components/product/Filters";
import styles from "./PageProducts.module.css";

export default function Products() {
  const { products, getColumnValues } = useProduct();
  const { applyFilters } = useProductsFilter(products);

  const filterProducts = applyFilters();

  const brands = getColumnValues(products, "marca");
  const departments = getColumnValues(products, "departamento");

  const cardsProducts = filterProducts.map((product) => {
    return <CardProduct product={product} key={product.id}></CardProduct>;
  });

  return (
    <Layout>
      <div className={styles.mainContent}>
        <Filters
          products={filterProducts}
          brands={brands}
          departments={departments}
        ></Filters>
        <section className={styles.products}>
          {cardsProducts.length >= 0 ? cardsProducts : <p>Sin resultados</p>}
        </section>
      </div>
    </Layout>
  );
}
