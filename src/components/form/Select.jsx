import Label from "./Label";
import styles from "./Select.module.css";

export default function Select({
  defaultOption = "Selecciona una opción",
  name,
  label,
  register,
  list = [],
  required,
}) {
  const options = list.map((option, index) => {
    return (
      <option value={option} key={index}>
        {option}
      </option>
    );
  });

  return (
    <div className={styles.selectContainer}>
      <Label required={required} htmlFor={name}>
        {label}
      </Label>
      <select
        className={styles.select}
        {...register(name ?? label, {
          required: `Selecciona una opción del campo ${name ?? label}`,
        })}
      >
        <option value="" disabled selected>
          {defaultOption}
        </option>
        {options}
      </select>
    </div>
  );
}
