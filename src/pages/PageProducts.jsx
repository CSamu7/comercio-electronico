import { useState } from "react";
import Layout from "../components/Layout";
import CardProduct from "../components/product/CardProduct";
import Filters from "../components/product/Filters";
import { useProduct } from "../hooks/useProduct";
import styles from "./PageProducts.module.css";
import { useForm } from "react-hook-form";
import { useFilters } from "../hooks/useFilters";

export default function Products() {
  const { products } = useProduct();
  const { register, handleSubmit, setValue } = useForm();
  const { applyFilters } = useFilters(products);

  const filterProducts = applyFilters(products);

  const [listProducts, setListProducts] = useState(filterProducts);

  const cardsProducts = listProducts.map((product) => {
    return <CardProduct product={product} key={product.id}></CardProduct>;
  });

  return (
    <Layout>
      <div className={styles.mainContent}>
        <Filters
          products={listProducts}
          register={register}
          setValue={setValue}
        ></Filters>
        <section className={styles.products}>
          {cardsProducts.length >= 0 ? cardsProducts : <p>Sin resultados</p>}
        </section>
      </div>
    </Layout>
  );
}
