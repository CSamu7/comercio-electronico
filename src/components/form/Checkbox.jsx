import styles from "./Checkbox.module.css";

export default function Checkbox({ checked, label, ...props }) {
  return (
    <div className={styles.checkboxes}>
      <label>{label}</label>
      <input
        type="checkbox"
        checked={checked}
        className={styles.checkbox}
        {...props}
      ></input>
    </div>
  );
}
