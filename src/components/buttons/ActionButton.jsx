import styles from "./ButtonStyles.module.css";

export default function ActionButton({
  children,
  variant,
  onClick,
  type,
  className,
  width = "200px",
}) {
  return (
    <button
      style={{
        width: width,
      }}
      className={`${className} ${styles["btnBase"]} ${styles[variant]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
