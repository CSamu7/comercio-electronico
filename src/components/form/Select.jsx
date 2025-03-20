import { capitalize } from "../helpers/formatStrings";
import styles from "./Select.module.css";

export default function Select({
  defaultOption = "Selecciona una opción",
  name,
  label,
  onChange,
  list = [],
}) {
  let options;

  if (!Array.isArray(list[0]) && typeof list[0] !== "object") {
    options = list.map((item, index) => {
      return <option key={index}>{item}</option>;
    });
  } else {
    options = list.map((item) => {
      return <option key={item.clave}>{capitalize(item.nombre)}</option>;
    });
  }

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
