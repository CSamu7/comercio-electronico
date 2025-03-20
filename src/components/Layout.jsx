import Footer from "./Footer";
import Header from "./header/Header";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}
