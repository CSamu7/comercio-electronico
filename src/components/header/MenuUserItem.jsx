import ActionButton from "../buttons/ActionButton";
import styles from "./MenuUserItem.module.css";

export default function MenuUserItem({ children, onClick }) {
  return (
    <li className={styles.menuItem} onClick={onClick}>
      <ActionButton
        width="150px"
        variant="btnInline"
        className={styles.btnMenu}
      >
        {children}
      </ActionButton>
    </li>
  );
}
