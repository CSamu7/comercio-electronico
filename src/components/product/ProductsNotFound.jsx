import styles from "./ProductsNotFound.module.css";

export default function ProductsNotFound() {
  return (
    <div className={styles.msgNoProducts}>
      <p>No hay productos con estas características.</p>
      <ul className={styles.listErrors}>
        <li>Checa si esta escrito correctamente ✏️</li>
        <li>Elimina algunos filtros ❌</li>
      </ul>
    </div>
  );
}
