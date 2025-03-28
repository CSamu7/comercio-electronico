import { useSearchParams, useNavigate } from "react-router";
import FormInput from "../form/FormInput";

export default function ListFilters({
  children,
  title,
  list,
  register,
  setValue,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  //TODO: Mover al hook de useFilters
  const addFilters = (e) => {
    const [name, value] = e.target.name.split("-");

    if (e.target.checked) {
      setSearchParams((prev) => {
        return [...prev.entries(), [name, value]];
      });
    } else {
      searchParams.delete(name, value);
      setSearchParams(searchParams);
    }

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
