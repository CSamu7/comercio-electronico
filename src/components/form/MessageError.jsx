import styles from "./MessageError.module.css";

export default function MessageError({ children, variant }) {
  return (
    <p
      className={`${styles.msgError} ${variant && styles[variant]}`}
      role="alert"
    >
      {children}
    </p>
  );
}
