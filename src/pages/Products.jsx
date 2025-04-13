import Layout from "../components/Layout";
import CardProduct from "../components/product/CardProduct";
import Filters from "../components/product/Filters";
import styles from "./Products.module.css";

import { useProduct } from "../hooks/useProduct";
import { useLoaderData, useSearchParams } from "react-router";

export default function Products() {
  const products = useLoaderData();
  const { getColumnValues, filterByPrice, filterByTypes, filterName } =
    useProduct(products);

  const [searchParams] = useSearchParams();
  //!Horrible codigo
  const filters = {
    nombre: searchParams.get("nombre") ?? "",
    departamento: searchParams.getAll("Tipos") ?? [],
    marca: searchParams.getAll("Marcas") ?? [],
    precioMinimo: Number(searchParams.get("Precio minimo")) || 0,
    precioMaximo: Number(searchParams.get("Precio maximo")) || 100000,
    calificacion: searchParams.get("calificacion") ?? 4,
  };

  const filterProducts = () => {
    let filtProducts = filterName(filters.nombre, products, 50);
    filtProducts = filterByTypes(
      filters.departamento,
      "departamento",
      filtProducts,
      50
    );

    filtProducts = filterByTypes(filters.marca, "marca", filtProducts, 50);
    filtProducts = filterByPrice(
      [filters.precioMinimo, filters.precioMaximo],
      filtProducts
    );

    return filtProducts;
  };

  const list = filterProducts();

  const brands = getColumnValues("marca");
  const departments = getColumnValues("departamento");

  const cardsProducts = list.map((product) => {
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
