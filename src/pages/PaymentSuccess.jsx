import LinkButton from "../components/buttons/LinkButton";
import Layout from "../components/Layout";
import styles from "./PaymentSuccess.module.css";

export default function PaymentSucessful() {
  return (
    <Layout>
      <div className={styles.main}>
        <h2>Gracias por tu compra</h2>
        <LinkButton url="/inicio" variant="btnWithBg">
          Seguir comprando
        </LinkButton>
      </div>
    </Layout>
  );
}
