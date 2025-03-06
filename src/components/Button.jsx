import style from "./Button.module.css";

export default function Button({
  children,
  onClick,
  bgColor = "light-blue",
  color = "white",
  className,
}) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `var(--${bgColor})`, color: `var(--${color})` }}
      className={`${style.btn} ${className}`}
    >
      {children}
    </button>
  );
}
