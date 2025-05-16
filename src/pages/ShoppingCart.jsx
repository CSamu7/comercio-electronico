import Layout from "../components/Layout";
import ShoopingCartItem from "../components/ShoppingCartItem";
import styles from "./ShoppingCart.module.css";
import DivisorLine from "../components/DivisorLine";
import ActionButton from "../components/buttons/ActionButton";
import { getCheckoutURL } from "../services/checkoutService";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../context/ShoppingCarContext";
import MessageError from "../components/form/MessageError";

export default function ShoppingCart() {
  const { shoppingProducts, getSubtotal } = useContext(ShoppingCartContext);
  const [error, setError] = useState(false);

  const products = shoppingProducts.map((product) => (
    <ShoopingCartItem product={product}></ShoopingCartItem>
  ));

  const handleCheckout = async () => {
    if (shoppingProducts.length === 0) {
      setError(true);
      return;
    }

    setError(false);

    const stripeURL = await getCheckoutURL(shoppingProducts);

    window.location = stripeURL.url;
  };

  return (
    <Layout>
      <div className={styles.content}>
        <h2 className={styles.title}>Carrito de compras</h2>
        <DivisorLine></DivisorLine>
        <div className={styles.layoutShoppingCart}>
          <section className={styles.shoppingCartItems}>
            {products.length === 0 ? (
              <p>No tienes ningun producto en tu carrito</p>
            ) : (
              products
            )}
          </section>
          <strong className={styles.subtotal}>
            Subtotal:{" "}
            <span className={styles.subtotalPrice}>${getSubtotal()}</span>
          </strong>
          <ActionButton
            variant={"btnWithBg"}
            className={styles.btnPayment}
            onClick={handleCheckout}
          >
            Proceder al pago
          </ActionButton>
          {error && (
            <MessageError variant="withBg">
              ¡Necesitas tener productos en tu carrito!
            </MessageError>
          )}
        </div>
      </div>
    </Layout>
  );
}
