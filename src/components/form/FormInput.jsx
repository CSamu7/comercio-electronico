import { camelize } from "../helpers/formatStrings";
import styles from "./FormInput.module.css";

export default function FormInput({
  name = "",
  type = "text",
  handleUpdate,
  width = 200,
  required,
  label,
  value,
}) {
  const formatName = () => {
    if (name) return name;

    const camelName = camelize(label);

    return camelName;
  };

  name = formatName();

  return (
    <div className={styles.formDiv}>
      <label
        htmlFor={name}
        className={`${styles.label} ${required && styles.formLabelRequired}`}
      >
        {label}
      </label>
      <input
        required={required}
        style={{
          width: `${width}px`,
        }}
        type={type}
        name={name}
        id={name}
        onChange={handleUpdate}
        className={styles.formInput}
        value={value}
        checked={value}
      ></input>
    </div>
  );
}
