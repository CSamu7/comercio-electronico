import { useSearchParams, useNavigate } from "react-router";
import FormInput from "../form/FormInput";
import { useProductsFilter } from "../../hooks/useProductsFilter";
import styles from "./ListFilters.module.css";

export default function ListFilters({
  children,
  title,
  list,
  register,
  setValue,
}) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addFilter, deleteFilter } = useProductsFilter(list);

  const addFilters = (e) => {
    const [name, value] = e.target.name.split("_");
    e.target.checked ? addFilter(name, value) : deleteFilter(name, value);
    navigate(0);
  };
  const options = list.map((item) => {
    if (!item) return;

    return (
      <FormInput
        key={item}
        type="checkbox"
        register={register}
        name={`${title}_${item}`}
        label={item}
        width={20}
        handleChange={addFilters}
      ></FormInput>
    );
  });

  //TODO: Posibles optimizaciones
  const setFormValues = () => {
    for (const [param, value] of searchParams.entries()) {
      setValue(`${param}_${value}`, true);
    }
  };

  setFormValues();

  return (
    <div>
      {children}
      <div className={styles.checkboxes}>{options}</div>
    </div>
  );
}
