import Layout from "../components/Layout";
import ShoopingCartItem from "../components/ShoppingCartItem";
import styles from "./ShoppingCart.module.css";
import DivisorLine from "../components/DivisorLine";
import { useLocation, useNavigate } from "react-router";
import { useShoppingCart } from "../hooks/useShoppingCart";
import ActionButton from "../components/buttons/ActionButton";
import { getCheckoutURL } from "../services/checkoutService";

export default function ShoppingCart() {
  const { state } = useLocation();
  const { shoppingProducts, updateProductAmount } = useShoppingCart(
    state.idUser
  );
  const products = shoppingProducts.map((product) => (
    <ShoopingCartItem
      product={product}
      updateProduct={updateProductAmount}
    ></ShoopingCartItem>
  ));

  const subtotal = shoppingProducts.reduce(
    (acc, current) => current.precio * current.cantidad,
    0
  );

  const handleCheckout = async () => {
    const stripeURL = await getCheckoutURL(shoppingProducts);

    window.location = stripeURL.url;
  };

  return (
    <Layout>
      <main className={styles.main}>
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
            Subtotal: <span className={styles.subtotalPrice}>${subtotal}</span>
          </strong>
          <ActionButton
            variant={"btnWithBg"}
            className={styles.btnPayment}
            onClick={handleCheckout}
          >
            Proceder al pago
          </ActionButton>
        </div>
      </main>
    </Layout>
  );
}
