import styles from "./Select.module.css";

export default function Select({
  defaultOption = "Selecciona una opción",
  name,
  options,
  label,
  onChange,
}) {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select onChange={onChange} name={name} className={styles.select}>
        <option>{defaultOption}</option>
        {options}
      </select>
    </div>
  );
}
