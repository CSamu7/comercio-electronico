import Layout from "../../components/Layout";
import styles from "./Product.module.css";
import ActionButton from "../../components/buttons/ActionButton";
import Select from "../../components/form/Select";
import LinkButton from "../../components/buttons/LinkButton";

import { useLoaderData } from "react-router";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCarContext";
import MessageError from "../../components/form/MessageError";

export default function Product() {
  const [product] = useLoaderData();
  const { register, watch } = useForm();
  const { addProduct, getProductAmount } = useContext(ShoppingCartContext);
  const { id_producto, nombre, url_imagen, descripcion, precio, stock } =
    product;

  const [errorMsg, setErrorMsg] = useState("");

  const options = Array.from({ length: stock }, (v, k) => k + 1);

  const handleAddProductCart = () => {
    const amount = parseInt(watch("cantidad"));

    if (!amount) {
      setErrorMsg("No has seleccionado una cantidad");
      return;
    }

    if (getProductAmount(id_producto) + amount > stock) {
      setErrorMsg(`El producto solo tiene disponible ${stock} unidades`);
      return;
    }

    setErrorMsg("");
    addProduct(id_producto, amount);
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
            {errorMsg && (
              <MessageError variant="withBg">{errorMsg}</MessageError>
            )}
          </div>
        </div>
      </div>
      <div className={styles.shipping}></div>
    </Layout>
  );
}
