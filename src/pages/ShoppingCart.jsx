import Layout from "../components/Layout";
import ShoopingCartItem from "../components/ShoppingCartItem";
import styles from "./ShoppingCart.module.css";
import DivisorLine from "../components/DivisorLine";
import ActionButton from "../components/buttons/ActionButton";
import { getCheckoutURL } from "../services/checkoutService";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCarContext";

export default function ShoppingCart() {
  const { shoppingProducts, getSubtotal } = useContext(ShoppingCartContext);

  const products = shoppingProducts.map((product) => (
    <ShoopingCartItem product={product}></ShoopingCartItem>
  ));

  const handleCheckout = async () => {
    if (shoppingProducts.length === 0) return;

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
        </div>
      </div>
    </Layout>
  );
}
