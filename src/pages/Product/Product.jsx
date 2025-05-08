import Layout from "../../components/Layout";
import styles from "./Product.module.css";
import ActionButton from "../../components/buttons/ActionButton";
import Select from "../../components/form/Select";
import LinkButton from "../../components/buttons/LinkButton";

import { useLoaderData } from "react-router";
import { useForm } from "react-hook-form";
import { useShoppingCart } from "../../hooks/useShoppingCart";

export default function Product() {
  const [product] = useLoaderData();
  const { register, watch } = useForm();
  const { addProduct } = useShoppingCart();

  const { id_producto, nombre, url_imagen, descripcion, precio, stock } =
    product;

  const options = Array.from({ length: stock }, (v, k) => k + 1);

  const handleAddProductCart = () => {
    const amount = parseInt(watch("cantidad"));

    addProduct(id_producto, amount);
    window.location.reload();
  };

  return (
    <Layout>
      <div className={styles.product}>
        <div className={styles.productLayout}>
          <img className={styles.img} src={url_imagen}></img>
          <div className={styles.productInfo}>
            <h1 className={styles.title}>{nombre}</h1>
            <h3 className={styles.brand}>
              Marca: {""}
              <LinkButton url={`/productos/?Marcas=${product.marca}`}>
                {product.marca}
              </LinkButton>
            </h3>
            <strong className={styles.priceAmount}>${precio}</strong>
            <p className={styles.description}>{descripcion}</p>
            <Select
              register={register}
              name="cantidad"
              label="Cantidad"
              list={options}
            ></Select>
            <div className={styles.buttons}>
              <ActionButton variant="btnWithBg" onClick={handleAddProductCart}>
                Agregar al carrito
              </ActionButton>
              <ActionButton variant="btnWithBg">Comprar ahora</ActionButton>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shipping}></div>
    </Layout>
  );
}
