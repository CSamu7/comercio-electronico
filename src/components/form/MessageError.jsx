import styles from "./MessageError.module.css";

export default function MessageError({ children }) {
  return <p className={styles.msgError}>{children}</p>;
}
