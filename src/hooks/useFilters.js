import { useSearchParams } from "react-router";

const useFilters = (obj = []) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    nombre: searchParams.get("nombre") ?? "",
    departamentos: searchParams.getAll("Tipos") ?? [],
    marcas: searchParams.getAll("Marcas") ?? [],
    precioMinimo: searchParams.get("precio-minimo") ?? 0,
    precioMaximo: searchParams.get("precio-maximo") ?? 60000,
    calificacion: searchParams.get("calificacion") ?? 4,
  };

  const applyFilters = () => {
    let products = filterByName(obj);
    let prices = filterByPrice();

    return products;
  };

  const filterByName = (obj) => {
    const regexName = new RegExp(`${filters.nombre}`, "im");

    return obj.filter((item) => regexName.test(item["name"]));
  };

  const filterByTypes = (name) => {
    if (filters[name].length !== 0) {
      return obj.filter((item) => filters[name].includes(item[name]));
    }
  };

  const filterByPrice = () => {
    return obj.filter(
      (item) =>
        item["price"] >= filters.precioMinimo &&
        filterByPrice <= filters.precioMaximo
    );
  };

  const filterByRating = () => {};

  return {
    applyFilters,
  };
};

export { useFilters };
