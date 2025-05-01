import Layout from "../components/Layout";
import ShoopingCartItem from "../components/ShoppingCartItem";
import styles from "./ShoppingCart.module.css";
import DivisorLine from "../components/DivisorLine";
import { useLocation } from "react-router";
import { useShoppingCart } from "../hooks/useShoppingCart";

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
        </div>
      </main>
    </Layout>
  );
}
