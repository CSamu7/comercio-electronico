import styles from "./Label.module.css";

export default function Label({ children, required, htmlFor }) {
  return (
    <label className={required && styles.labelRequired} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
