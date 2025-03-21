import styles from "./FormInput.module.css";

export default function FormInput({
  name = "",
  type = "text",
  width = 200,
  label,
  register,
  required,
}) {
  return (
    <div className={styles.formDiv}>
      <label
        htmlFor={name}
        className={`${styles.label} ${required && styles.formLabelRequired}`}
      >
        {label}
      </label>
      <input
        style={{
          width: `${width}px`,
        }}
        className={styles.formInput}
        type={type}
        {...register(label, { required })}
      ></input>
    </div>
  );
}
