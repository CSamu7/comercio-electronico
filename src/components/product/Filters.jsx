import styles from "./Filters.module.css";
import { useProduct } from "../../hooks/useProduct";
import FormInput from "../form/FormInput";
import ListFilters from "./ListFilters";
import ActionButton from "../buttons/ActionButton";

export default function Filters({ products, register, setValue }) {
  const { getColumnValues } = useProduct();

  const brands = getColumnValues(products, "marca");
  const departments = getColumnValues(products, "departamento");

  //TODO: Crear otro componente para los filtros
  return (
    <div className={styles.filters}>
      <h2>Filtros</h2>

      <ListFilters
        title="Tipos"
        list={departments}
        register={register}
        setValue={setValue}
      >
        <h3>Tipos</h3>
      </ListFilters>
      <ListFilters
        title="Marcas"
        list={brands}
        register={register}
        setValue={setValue}
      >
        <h3>Marcas</h3>
      </ListFilters>
      <h3>Precio</h3>
      <FormInput
        register={register}
        label="Precio minimo"
        width="80"
      ></FormInput>

      <FormInput
        register={register}
        label="Precio maximo"
        width="80"
      ></FormInput>
      <ActionButton variant={"btnWithBg"} width="180px" size="small">
        Aplicar precios
      </ActionButton>

      <h3>Opiniones</h3>
    </div>
  );
}
