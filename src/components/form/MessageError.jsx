import styles from "./MessageError.module.css";

export default function MessageError({ children, condition }) {
  return (
    <p className={`${styles.msgError} ${condition && styles.msgErrorActive}`}>
      {children}
    </p>
  );
}
