import styles from "./ButtonStyles.module.css";

export default function ActionButton({
  children,
  variant,
  onClick,
  type,
  className,
  size,
  width = "200px",
}) {
  return (
    <button
      style={{
        width: width,
      }}
      className={`${styles["btnBase"]} ${styles[variant]} ${styles[size]} ${
        className && className
      }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
