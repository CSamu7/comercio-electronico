import styles from "./FormInput.module.css";
import Label from "./Label";

export default function FormInput({
  name,
  type = "text",
  width,
  label,
  register,
  required,
  maxLength,
  minLength,
  handleChange,
  checked,
}) {
  return (
    <div className={styles.formDiv}>
      <Label required={required} htmlFor={name}>
        {label}
      </Label>
      <input
        style={
          width && {
            width: `${width}px`,
          }
        }
        className={styles.formInput}
        type={type}
        {...register(name ?? label, {
          required: `El campo ${name ?? label} esta vacio`,
          minLength: {
            value: minLength,
            message: `El campo ${
              name ?? label
            } debe tener minimo ${minLength} caracteres`,
          },
          maxLength: {
            value: maxLength,
            message: `El campo ${
              name ?? label
            } debe tener maximo ${maxLength} caracteres`,
          },
          onChange: handleChange,
        })}
      ></input>
    </div>
  );
}
