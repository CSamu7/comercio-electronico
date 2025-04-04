import { useSearchParams, useNavigate } from "react-router";
import FormInput from "../form/FormInput";
import { useProductsFilter } from "../../hooks/useProductsFilter";

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

  //TODO: Mover al hook de useFilters
  const addFilters = (e) => {
    const [name, value] = e.target.name.split("-");
    e.target.checked ? addFilter(name, value) : deleteFilter(name, value);
    navigate(0);
  };
  const options = list.map((item) => {
    if (!item) return;

    //TODO: Si esta seleccionado el filtro, mantenerlo seleccionado al actualizar la pagina.
    return (
      <FormInput
        key={item}
        type="checkbox"
        register={register}
        name={`${title}-${item}`}
        label={item}
        width={20}
        handleChange={addFilters}
      ></FormInput>
    );
  });

  const setFormValues = () => {
    for (const [param, value] of searchParams.entries()) {
      setValue(`${param}-${value}`, true);
    }
  };

  setFormValues();

  return (
    <div>
      {children}
      {options}
    </div>
  );
}
