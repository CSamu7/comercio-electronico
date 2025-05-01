import Layout from "../../components/Layout";
import CardProduct from "../../components/product/CardProduct";
import Filters from "./Filters";
import styles from "./Products.module.css";

import { useProduct } from "../../hooks/useProduct";
import { useLoaderData, useSearchParams } from "react-router";
import ProductsNotFound from "../../components/product/ProductsNotFound";

export default function Products() {
  const products = useLoaderData();
  const { getColumnValues, filterByPrice, filterByTypes, filterName } =
    useProduct(products);

  const [searchParams] = useSearchParams();
  //!Horrible codigo
  //!Si, sigue siendo horrible y lo tendre que checar algun dia.
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

  console.log(cardsProducts);

  return (
    <Layout>
      <div className={styles.mainContent}>
        <Filters
          products={filterProducts}
          brands={brands}
          departments={departments}
        ></Filters>
        <section className={styles.products}>
          {cardsProducts.length > 0 ? (
            cardsProducts
          ) : (
            <ProductsNotFound></ProductsNotFound>
          )}
        </section>
      </div>
    </Layout>
  );
}
