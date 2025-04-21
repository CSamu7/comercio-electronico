import styles from "./ListFilters.module.css";
import { useURLParams } from "../../hooks/useParams";
import { Controller } from "react-hook-form";
import Checkbox from "../../components/form/Checkbox";

export default function ListFilters({ children, title, list, control }) {
  const { searchParams, addFilter, deleteFilter } = useURLParams();

  const addFilters = (name, checked) => {
    const [filterName, value] = name.split("_");

    !checked ? addFilter(filterName, value) : deleteFilter(filterName, value);
  };

  const options = list.map((item, index) => {
    if (!item) return;

    return (
      <Controller
        key={index}
        control={control}
        name={`${title}_${item}`}
        defaultValue={searchParams.has(title, item)}
        render={({ field: { onChange, name, value } }) => (
          <Checkbox
            label={`${item}`}
            checked={value}
            onChange={(e) => {
              addFilters(name, value);
              onChange(e);
            }}
          />
        )}
      ></Controller>
    );
  });

  return (
    <div>
      {children}
      <div className={styles.checkboxes}>{options}</div>
    </div>
  );
}
