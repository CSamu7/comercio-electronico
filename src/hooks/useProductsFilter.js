import { useSearchParams } from "react-router";

const useProductsFilter = (listProducts = []) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    nombre: searchParams.get("nombre") ?? "",
    departamento: searchParams.getAll("Tipos") ?? [],
    marca: searchParams.getAll("Marcas") ?? [],
    precioMinimo: Number(searchParams.get("Precio minimo")) || 0,
    precioMaximo: Number(searchParams.get("Precio maximo")) || 100000,
    calificacion: searchParams.get("calificacion") ?? 4,
  };

  const addFilter = (name, value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.append(name, value);

    setSearchParams(newParams);
  };

  const addMultipleFilters = (filters = []) => {
    const newParams = new URLSearchParams(searchParams);

    for (const [name, value] of filters) {
      if (value === "") {
        newParams.delete(name);
      } else if (newParams.has(name)) {
        newParams.set(name, value);
      } else {
        newParams.append(name, value);
      }
    }

    setSearchParams(newParams);
  };

  const deleteFilter = (name, value) => {
    searchParams.delete(name, value);
    setSearchParams(searchParams);
  };

  const applyFilters = () => {
    let products = filterByName(listProducts);
    products = filterByTypes("departamento", products);
    products = filterByTypes("marca", products);
    products = filterByPrice(products);

    return products;
  };

  const filterByName = (list) => {
    if (filters["nombre"] === "") return list;

    const regexName = new RegExp(`${filters.nombre}`, "im");

    return listProducts.filter((item) => regexName.test(item["name"]));
  };

  //Item = departamento, filters = departamentos
  const filterByTypes = (name, list) => {
    if (filters[name].length !== 0) {
      return list.filter((item) => filters[name].includes(item[name]));
    }

    return list;
  };

  const filterByPrice = (list) => {
    return list.filter((item) => {
      return (
        (item["precio"] * 19.92).toFixed(2) >= filters.precioMinimo &&
        (item["precio"] * 19.92).toFixed(2) <= filters.precioMaximo
      );
    });
  };

  const filterByRating = () => {};

  return {
    addFilter,
    deleteFilter,
    addMultipleFilters,
    applyFilters,
  };
};

export { useProductsFilter };
