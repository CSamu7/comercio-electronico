import styles from "./Filters.module.css";
import FormInput from "../../components/form/FormInput";
import ListFilters from "./ListFilters";
import ActionButton from "../../components/buttons/ActionButton";
import { useForm } from "react-hook-form";
import { useURLParams } from "../../hooks/useParams";

export default function Filters({ brands, departments }) {
  const { addMultipleFilters } = useURLParams();
  const { register, getValues, setValue, control } = useForm();

  //TODO: Controlar aqui todos los filtros. Los filtros que estan en ListFilters pasarlos aqui.
  return (
    <form className={styles.filters}>
      <h2>Filtros</h2>
      <ListFilters
        title="Tipos"
        list={departments}
        register={register}
        setValue={setValue}
        control={control}
      >
        <h3>Tipos</h3>
      </ListFilters>
      <ListFilters
        title="Marcas"
        list={brands}
        register={register}
        control={control}
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
      <ActionButton
        variant={"btnWithBg"}
        width="180px"
        size="small"
        type="submit"
        onClick={(e) => {
          e.preventDefault();

          const values = getValues(["Precio minimo", "Precio maximo"]);
          const urlParams = [
            ["Precio minimo", values[0]],
            ["Precio maximo", values[1]],
          ];

          addMultipleFilters(urlParams);
        }}
      >
        Aplicar precios
      </ActionButton>
    </form>
  );
}
