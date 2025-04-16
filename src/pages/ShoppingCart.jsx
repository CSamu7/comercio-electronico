import Layout from "../components/Layout";
import products from "../../shopping.json";
import ShoopingCartItem from "../components/ShoppingCartItem";
import styles from "./ShoppingCart.module.css";
import DivisorLine from "../components/DivisorLine";

export default function ShoppingCart() {
  const shoppingProducts = products.map((product) => (
    <ShoopingCartItem product={product}></ShoopingCartItem>
  ));

  return (
    <Layout>
      <main className={styles.main}>
        <h2 className={styles.title}>Carrito de compras</h2>
        <DivisorLine></DivisorLine>
        <div className={styles.layoutShoppingCart}>
          <section className={styles.shoppingCartItems}>
            {shoppingProducts}
          </section>
          <strong className={styles.subtotal}>
            Subtotal: <span className={styles.subtotalPrice}>$34,432</span>
          </strong>
        </div>
      </main>
    </Layout>
  );
}
