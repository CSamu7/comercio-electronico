import styles from "./Footer.module.css";
import instagramIcon from "../assets/instagram_icon.webp";
import facebookIcon from "../assets/facebook_icon.webp";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogos}>
        <p>¡Siguenos en nuestras redes sociales!</p>
        <img src={instagramIcon} height={"40px"} width={"40px"}></img>
        <img src={facebookIcon} height={"40px"} width={"40px"}></img>
      </div>
    </footer>
  );
}
