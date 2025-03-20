import { Link } from "react-router";
import style from "./ButtonStyles.module.css";

export default function LinkButton({ className, variant, url, children }) {
  return (
    <Link
      className={`${style.btnBase} ${className} ${style[variant]}`}
      to={url}
    >
      {children}
    </Link>
  );
}
