import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogos}>
        <p>¡Siguenos en nuestras redes sociales!</p>
        <img src="facebook_icon.webp" height={"40px"} width={"40px"}></img>
        <img src="instagram_icon.webp" height={"40px"} width={"40px"}></img>
      </div>
    </footer>
  );
}
