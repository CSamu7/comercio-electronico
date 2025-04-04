import { useSearchParams } from "react-router";

const useProductsFilter = (listProducts = []) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    nombre: searchParams.get("nombre") ?? "",
    departamento: searchParams.getAll("Tipos") ?? [],
    marca: searchParams.getAll("Marcas") ?? [],
    precioMinimo: searchParams.get("precio-minimo") ?? 0,
    precioMaximo: searchParams.get("precio-maximo") ?? 60000,
    calificacion: searchParams.get("calificacion") ?? 4,
  };

  const addFilter = (name, value) => {
    setSearchParams((prev) => {
      return [...prev.entries(), [name, value]];
    });
  };

  const deleteFilter = (name, value) => {
    searchParams.delete(name, value);
    setSearchParams(searchParams);
  };

  const applyFilters = () => {
    let products = filterByName(listProducts);
    console.log(filterByTypes("departamento"));
    console.log(filterByTypes("marca"));

    return products;
  };

  const filterByName = (listProducts) => {
    const regexName = new RegExp(`${filters.nombre}`, "im");

    return listProducts.filter((item) => regexName.test(item["name"]));
  };

  //Item = departamento, filters = departamentos
  const filterByTypes = (name) => {
    if (filters[name].length !== 0) {
      return listProducts.filter((item) => filters[name].includes(item[name]));
    }

    return listProducts;
  };

  const filterByPrice = () => {
    return obj.filter(
      (item) =>
        item["price"] >= filters.precioMinimo &&
        item["price"] <= filters.precioMaximo
    );
  };

  const filterByRating = () => {};

  return {
    addFilter,
    deleteFilter,
    applyFilters,
  };
};

export { useProductsFilter };
